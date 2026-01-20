import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
//Configure dotenv before other imports
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";
import { Redis } from "@upstash/redis";

async function generateEmbeddings() {
  // Check if required environment variables are present
  if (!process.env.ASTRA_DB_ENDPOINT || !process.env.ASTRA_DB_APPLICATION_TOKEN) {
    console.log("Skipping embeddings generation: Astra DB environment variables not set");
    return;
  }

  try {
    await Redis.fromEnv().flushdb();
  } catch (error) {
    console.log("Warning: Could not flush Redis cache:", error instanceof Error ? error.message : String(error));
  }

  const vectorStore = await getVectorStore();

  try {
    (await getEmbeddingsCollection()).deleteMany({});
  } catch (error) {
    console.log("Warning: Could not clear embeddings collection:", error instanceof Error ? error.message : String(error));
  }

  const loader = new DirectoryLoader(
    "src/app/",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true,
  );

  const docs = (await loader.load())
    .filter((doc) => doc.metadata.source.endsWith("page.tsx"))
    .filter((doc) => doc.metadata.source.includes("/projects/"))
    .map((doc): DocumentInterface => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/app")[1]
          .split("/page.")[0] || "/";

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "") // Remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();

      return {
        pageContent: pageContentTrimmed,
        metadata: { url },
      };
    });

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

  const splitDocs = await splitter.splitDocuments(docs);

  await vectorStore.addDocuments(splitDocs);
  console.log("Embeddings generated successfully");
}

generateEmbeddings().catch((error) => {
  console.error("Error generating embeddings:", error);
  process.exit(0); // Exit gracefully to allow build to continue
});
