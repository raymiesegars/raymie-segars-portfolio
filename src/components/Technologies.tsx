"use client";
import { H2 } from "./ui/H2";
import { H3 } from "./ui/H3";
import { ReactIcon } from "./ui/AboutIcons/ReactIcon";
import { NodeIcon } from "./ui/AboutIcons/NodeIcon";
import { ExpressIcon } from "./ui/AboutIcons/ExpressIcon";
import { NextIcon } from "./ui/AboutIcons/NextIcon";
import { TailwindIcon } from "./ui/AboutIcons/TailwindIcon";
import { HTML5Icon } from "./ui/AboutIcons/HTML5Icon";
import { CSS3Icon } from "./ui/AboutIcons/CSS3Icon";
import { PostgreSQLIcon } from "./ui/AboutIcons/PostgreSQLIcon";
import { useState } from "react";
import { GithubIcon } from "./ui/AboutIcons/GithubIcon";
import { MongoDBIcon } from "./ui/AboutIcons/MongoDBIcon";
import { ClerkIcon } from "./ui/AboutIcons/ClerkIcon";
import { PhotoshopIcon } from "./ui/AboutIcons/PhotoshopIcon";
import { FigmaIcon } from "./ui/AboutIcons/FigmaIcon";
import { ZodIcon } from "./ui/AboutIcons/ZodIcon";
import { VercelIcon } from "./ui/AboutIcons/VercelIcon";
import { RailwayIcon } from "./ui/AboutIcons/RailwayIcon";
import { StripeIcon } from "./ui/AboutIcons/StripeIcon";
import { ThreejsIcon } from "./ui/AboutIcons/ThreejsIcon";
import { SupabaseIcon } from "./ui/AboutIcons/SupabaseIcon";
import { NeonDBIcon } from "./ui/AboutIcons/NeonDBIcon";
import { ReactThreeFiberIcon } from "./ui/AboutIcons/ReactThreeFiberIcon";
import { TypeScriptIcon } from "./ui/AboutIcons/TypeScriptIcon";
import { OpenAIIcon } from "./ui/AboutIcons/OpenAIIcon";
import { LangChainIcon } from "./ui/AboutIcons/LangChainIcon";
import { AstraDBIcon } from "./ui/AboutIcons/AstraDBIcon";
import { UpstashIcon } from "./ui/AboutIcons/UpstashIcon";

interface Technology {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

const technologiesAI = [
  {
    name: "OpenAI",
    Icon: OpenAIIcon,
    url: "https://openai.com/",
    backgroundColor: "#10A37F21",
  },
  {
    name: "LangChain",
    Icon: LangChainIcon,
    url: "https://www.langchain.com/",
    backgroundColor: "#00000021",
  },
  {
    name: "Astra DB",
    Icon: AstraDBIcon,
    url: "https://www.datastax.com/products/datastax-astra",
    backgroundColor: "#C1262F21",
  },
  {
    name: "Upstash Redis",
    Icon: UpstashIcon,
    url: "https://upstash.com/",
    backgroundColor: "#00E9A321",
  },
];

const technologiesDevelopment = [
  {
    name: "Next.js",
    Icon: NextIcon,
    url: "https://nextjs.org/",
    backgroundColor: "rgba(255,235,235,0.13)",
  },
  {
    name: "React",
    Icon: ReactIcon,
    url: "https://react.dev/",
    backgroundColor: "#3E66AF21",
  },
  {
    name: "TypeScript",
    Icon: TypeScriptIcon,
    url: "https://www.typescriptlang.org/",
    backgroundColor: "#3178C621",
  },
  {
    name: "Three.js",
    Icon: ThreejsIcon,
    url: "https://threejs.org/",
    backgroundColor: "#00000021",
  },
  {
    name: "React Three Fiber",
    Icon: ReactThreeFiberIcon,
    url: "https://docs.pmnd.rs/react-three-fiber/",
    backgroundColor: "#00000021",
  },
  {
    name: "Tailwind CSS",
    Icon: TailwindIcon,
    url: "https://tailwindcss.com/",
    backgroundColor: "#3e77af21",
  },
  {
    name: "Node.js",
    Icon: NodeIcon,
    url: "https://nodejs.org/",
    backgroundColor: "#67af3e21",
  },
  {
    name: "Express",
    Icon: ExpressIcon,
    url: "https://expressjs.com/",
    backgroundColor: "rgba(0,0,0,0.13)",
  },
  {
    name: "PostgreSQL",
    Icon: PostgreSQLIcon,
    url: "https://www.postgresql.org/",
    backgroundColor: "rgba(11,255,255,0.13)",
  },
  {
    name: "Zod",
    Icon: ZodIcon,
    url: "https://www.npmjs.com/package/zod",
    backgroundColor: "#18253f88",
  },
];

const technologiesServices = [
  {
    name: "Supabase",
    Icon: SupabaseIcon,
    url: "https://supabase.com/",
    backgroundColor: "#3ECF8E21",
  },
  {
    name: "NeonDB",
    Icon: NeonDBIcon,
    url: "https://neon.tech/",
    backgroundColor: "#00E59921",
  },
  {
    name: "MongoDB",
    Icon: MongoDBIcon,
    url: "https://mongodb.com/",
    backgroundColor: "rgba(58,255,0,0.13)",
  },
  {
    name: "Clerk",
    Icon: ClerkIcon,
    url: "https://clerk.com/",
    backgroundColor: "#8560ff90",
  },
  {
    name: "Vercel",
    Icon: VercelIcon,
    url: "https://vercel.com/",
    backgroundColor: "#f4f2ed55",
  },
  {
    name: "Railway",
    Icon: RailwayIcon,
    url: "https://railway.app/",
    backgroundColor: "#A21AE645",
  },
  {
    name: "Stripe",
    Icon: StripeIcon,
    url: "https://stripe.com/",
    backgroundColor: "#635bff55",
  },
  {
    name: "GitHub",
    Icon: GithubIcon,
    url: "https://github.com/",
    backgroundColor: "rgba(255,255,255,0.13)",
  },
];

const technologiesApplications = [
  {
    name: "Adobe Photoshop",
    Icon: PhotoshopIcon,
    url: "https://www.adobe.com/products/photoshop/landpa.html?gclid=CjwKCAiAxaCvBhBaEiwAvsLmWDa9I3QOH8VbZN0C6gexP3R3kgRhKC25A8uF_fFK-9isefGAYk7wwBoCeOYQAvD_BwE&sdid=P79NQKGF&mv=search&mv2=paidsearch&ef_id=CjwKCAiAxaCvBhBaEiwAvsLmWDa9I3QOH8VbZN0C6gexP3R3kgRhKC25A8uF_fFK-9isefGAYk7wwBoCeOYQAvD_BwE:G:s&s_kwcid=AL!3085!3!673842496258!e!!g!!photoshop!1712238394!67643541820&mv=search&gad_source=1",
    backgroundColor: "#31A8FF88",
  },
  {
    name: "Figma",
    Icon: FigmaIcon,
    url: "https://www.figma.com/",
    backgroundColor: "#FF726288",
  },
];

export default function Technologies() {
  const [iconSize] = useState(48);

  const TechCard = ({ tech }: { tech: typeof technologiesDevelopment[0] }) => (
    <a
      href={tech.url}
      className="group flex items-center gap-3 rounded-lg border bg-card p-4 transition-all duration-300 hover:border-primary hover:shadow-md"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: tech.backgroundColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <tech.Icon
          className="transition-transform duration-300 group-hover:scale-110"
          width={iconSize}
          height={iconSize}
        />
      </div>
      <span className="font-medium">{tech.name}</span>
    </a>
  );

  return (
    <div className="space-y-6">
      <H2>Technologies & Skills</H2>
      
      <div className="space-y-4">
        <div>
          <H3 className="mb-3 text-lg font-semibold">AI & Machine Learning</H3>
          <p className="mb-4 text-sm text-muted-foreground">
            Experience with AI text generation, voice synthesis, vector databases for semantic search, 
            and RAG (Retrieval Augmented Generation) systems. Built AI-powered chatbots and a lip syncing 
            app using AI video generation.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {technologiesAI.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <H3 className="mb-3 text-lg font-semibold">Frontend & Frameworks</H3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technologiesDevelopment.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <H3 className="mb-3 text-lg font-semibold">Backend & Databases</H3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {technologiesServices.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <H3 className="mb-3 text-lg font-semibold">Design & Tools</H3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {technologiesApplications.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
