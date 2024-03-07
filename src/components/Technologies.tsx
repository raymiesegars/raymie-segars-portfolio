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
import { MySQLIcon } from "./ui/AboutIcons/MySQLIcon";
import { PostgreSQLIcon } from "./ui/AboutIcons/PostgreSQLIcon";
import { SassIcon } from "./ui/AboutIcons/SassIcon";
import { useState } from "react";
import { GithubIcon } from "./ui/AboutIcons/GithubIcon";
import { MongoDBIcon } from "./ui/AboutIcons/MongoDBIcon";
import { ClerkIcon } from "./ui/AboutIcons/ClerkIcon";
import { PhotoshopIcon } from "./ui/AboutIcons/PhotoshopIcon";
import { FigmaIcon } from "./ui/AboutIcons/FigmaIcon";
import { ZodIcon } from "./ui/AboutIcons/ZodIcon";
import { VercelIcon } from "./ui/AboutIcons/VercelIcon";
import { RailwayIcon } from "./ui/AboutIcons/RailwayIcon";

interface Technology {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

const technologiesDevelopment = [
  {
    name: "React.JS",
    Icon: ReactIcon,
    url: "https://react.dev/",
    backgroundColor: "#3E66AF21",
  },
  {
    name: "Node.JS",
    Icon: NodeIcon,
    url: "https://nodejs.org/",
    backgroundColor: "#67af3e21",
  },
  {
    name: "ExpressJS",
    Icon: ExpressIcon,
    url: "https://expressjs.com/",
    backgroundColor: "rgba(0,0,0,0.13)",
  },
  {
    name: "Next.JS",
    Icon: NextIcon,
    url: "https://nextjs.org/",
    backgroundColor: "rgba(255,235,235,0.13)",
  },
  {
    name: "Tailwind CSS",
    Icon: TailwindIcon,
    url: "https://tailwindcss.com/",
    backgroundColor: "#3e77af21",
  },
  {
    name: "HTML5",
    Icon: HTML5Icon,
    url: "https://wikipedia.org/wiki/HTML5",
    backgroundColor: "#e1711221",
  },
  {
    name: "CSS3",
    Icon: CSS3Icon,
    url: "https://en.wikipedia.org/wiki/CSS#CSS_3",
    backgroundColor: "rgba(77,94,255,0.13)",
  },
  {
    name: "MySQL",
    Icon: MySQLIcon,
    url: "https://www.mysql.com/",
    backgroundColor: "rgba(161,169,255,0.13)",
  },
  {
    name: "PostgreSQL",
    Icon: PostgreSQLIcon,
    url: "https://www.postgresql.org/",
    backgroundColor: "rgba(11,255,255,0.13)",
  },
  {
    name: "Sass",
    Icon: SassIcon,
    url: "https://sass-lang.com/",
    backgroundColor: "#8d14a855",
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
    name: "GitHub",
    Icon: GithubIcon,
    url: "https://github.com/",
    backgroundColor: "rgba(255,255,255,0.13)",
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
  const [iconSize, setIconSize] = useState(55);

  return (
    <>
      <H2>Technologies</H2>
      <H3 className="text-muted-foreground">Development</H3>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {technologiesDevelopment.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            className="flex items-center gap-3 rounded-lg border p-5 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              minWidth: "150px",
              minHeight: "100px",
              backgroundColor: tech.backgroundColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = tech.backgroundColor;
            }}
          >
            <div className="flex items-center justify-start">
              <div className="flex h-16 w-16 items-center justify-center">
                <tech.Icon
                  className="text"
                  width={iconSize}
                  height={iconSize}
                />
              </div>
              <span className="ml-3">{tech.name}</span>
            </div>
          </a>
        ))}
      </div>

      <H3 className="text-muted-foreground">Services</H3>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {technologiesServices.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            className="flex items-center gap-3 rounded-lg border p-5 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              minWidth: "150px",
              minHeight: "100px",
              backgroundColor: tech.backgroundColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = tech.backgroundColor;
            }}
          >
            <div className="flex items-center justify-start">
              <div className="flex h-16 w-16 items-center justify-center">
                <tech.Icon
                  className="text"
                  width={iconSize}
                  height={iconSize}
                />
              </div>
              <span className="ml-3">{tech.name}</span>
            </div>
          </a>
        ))}
      </div>

      <H3 className="text-muted-foreground">Applications</H3>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {technologiesApplications.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            className="flex items-center gap-3 rounded-lg border p-5 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              minWidth: "150px",
              minHeight: "100px",
              backgroundColor: tech.backgroundColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = tech.backgroundColor;
            }}
          >
            <div className="flex items-center justify-start">
              <div className="flex h-16 w-16 items-center justify-center">
                <tech.Icon
                  className="text"
                  width={iconSize}
                  height={iconSize}
                />
              </div>
              <span className="ml-3">{tech.name}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
