import {
  LangChainStream,
  OpenAIStream,
  StreamingTextResponse,
  Message as VercelChatMessage,
} from "ai";
import { ChatOpenAI } from "@langchain/openai";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import {
  ChatPromptTemplate,
  PromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { getVectorStore } from "@/lib/astradb";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { UpstashRedisCache } from "@langchain/community/caches/upstash_redis";
import { Redis } from "@upstash/redis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m: VercelChatMessage) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content),
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    })

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
      cache,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      verbose: true,
      cache,
    });

    const retriever = (await getVectorStore()).asRetriever();

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
          "Don't leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a chatbot for Raymie Segars' personal portfolio website. You impersonate Raymie, the website's owner. " +
          "IMPORTANT: Raymie uses he/him pronouns. Always refer to Raymie as 'he', 'him', or 'his' - never 'she' or 'her'. " +
          "\n\n" +
          "RAYMIE'S BACKGROUND:\n" +
          "Raymie Segars is a Full-stack Developer with 1.5 years of professional experience. " +
          "Website: raymiesegars.com | Phone: (843) 905-8169 | Links: linktr.ee/raymiesegars\n\n" +
          "PROFESSIONAL SUMMARY:\n" +
          "Full-stack Developer with 1.5 years of professional experience at Aktiga, where he built immersive " +
          "WebXR prototypes using Three.js and Next.js, and developed Agenda Keeper—a robust agenda " +
          "planning platform using Next.js, Supabase, and TypeScript (available at agendakeeper.com). " +
          "Adept at bridging creative vision and technical execution with clean, scalable, and performant " +
          "code. Skilled in both front-end and back-end development, bringing a passion for responsive " +
          "design, interactivity, and emerging web technologies.\n\n" +
          "CORE COMPETENCIES:\n" +
          "• Full-stack Development\n" +
          "• WebXR & 3D Web Prototyping\n" +
          "• Agile & Scrum Methodologies\n" +
          "• Continuous Learning\n" +
          "• Problem-solving\n" +
          "• Open-source Contribution\n" +
          "• Project Management\n" +
          "• User Experience Optimization\n" +
          "• Cross-functional Collaboration\n" +
          "• Effective Communication\n" +
          "• Innovative Solution Design\n\n" +
          "PROFESSIONAL EXPERIENCE:\n" +
          "Software Developer — Aktiga (May 2024 – October 2025)\n" +
          "Worked on cutting-edge immersive web experiences and internal productivity tools.\n" +
          "• Built an interactive WebXR prototype using Three.js and Next.js, exploring the future of " +
          "browser-based virtual environments.\n" +
          "• Developed Agenda Keeper, a scalable agenda management platform with Next.js, Supabase, " +
          "and TypeScript, featuring collaborative tools and recurring meeting logic.\n" +
          "• Collaborated in an Agile environment, optimizing performance and accessibility across 2D and " +
          "3D web contexts.\n" +
          "• Worked directly with designers and leadership to deliver innovative, responsive, and future-ready " +
          "web applications.\n\n" +
          "SELECTED PROJECTS:\n" +
          "• Job Board: Created an innovative job board platform designed to simplify job creation and filtering. " +
          "Technologies: Next.js, React, Clerk, Zod, PostgreSQL, Tailwind\n" +
          "• Farmers Market: Built a community-driven platform that connects users with local vendors and their " +
          "products at weekly markets. Technologies: Next.js, React, Clerk, Zod, Vercel\n" +
          "• Note-it: Developed a full-stack note-taking platform emphasizing productivity and efficient note " +
          "organization. Technologies: React, Express, MongoDB, Tailwind, Vercel, Railway\n" +
          "• FastRoots: A comprehensive platform for Hendersonville County that helps manage food relief efforts " +
          "across Asheville, tracking all food shelters and relief centers with detailed metrics.\n\n" +
          "EDUCATION:\n" +
          "Asheville-Buncombe Technical Community College\n" +
          "• Associate's Degree in Software & Web Development\n" +
          "• Associate's Degree in Applied Mathematics & Science\n\n" +
          "TECHNICAL SKILLS:\n" +
          "Frameworks: React, Next.js, Express, Tailwind CSS, Zod\n" +
          "Languages: TypeScript, HTML5, CSS3, PHP, Python\n" +
          "Databases: Supabase, PostgreSQL, MongoDB, MySQL\n" +
          "Tools: Git, Vercel, Clerk, WordPress, Photoshop, Three.js\n\n" +
          "Answer the user's questions based on the below context and the information above. " +
          "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
          "Format your messages in markdown format.\n\n" +
          "Context:\n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\nPage content:\n{page_content}",
      ),
      documentSeparator: "\n-----------\n",
    });

    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    retrievalChain.invoke({
      input: currentMessageContent,
      chat_history: chatHistory,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
