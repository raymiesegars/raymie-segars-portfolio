import { ClerkIcon } from "@/components/ui/AboutIcons/ClerkIcon";
import { ExpressIcon } from "@/components/ui/AboutIcons/ExpressIcon";
import { NextIcon } from "@/components/ui/AboutIcons/NextIcon";
import { NodeIcon } from "@/components/ui/AboutIcons/NodeIcon";
import { PostgreSQLIcon } from "@/components/ui/AboutIcons/PostgreSQLIcon";
import { RailwayIcon } from "@/components/ui/AboutIcons/RailwayIcon";
import { ReactIcon } from "@/components/ui/AboutIcons/ReactIcon";
import { TailwindIcon } from "@/components/ui/AboutIcons/TailwindIcon";
import { VercelIcon } from "@/components/ui/AboutIcons/VercelIcon";
import { ZodIcon } from "@/components/ui/AboutIcons/ZodIcon";
import { MongoDBIconProjectTechnology } from "@/components/ui/ProjectIcons/MongoDBIconProject";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { StripeIcon } from "@/components/ui/AboutIcons/StripeIcon";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  detailPageUrl: string;
  backgroundColor: string;
}

interface Technology {
  name: string;
}

const projects: Project[] = [
  {
    id: "farmer-market-finds",
    title: "Farmers Market Finds",
    description:
      "Website where vendors who plan to attend a farmers market can declare goods at certain market dates. The general public can then browse markets, vendors, and goods to plan out their farmers market adventures.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Clerk" },
      { name: "Zod" },
      { name: "Vercel" },
      { name: "PostgreSQL" },
      { name: "Tailwind" },
    ],
    imageUrl: "/farmers-market-finds.png",
    detailPageUrl: "/projects/farmers-market-finds",
    backgroundColor: "#19A54938",
  },
  {
    id: "image-alchemy",
    title: "Image Alchemy",
    description:
      "Freely transform uploaded images using Ai and save them publicly on the site.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "MongoDB" },
      { name: "Stripe" },
      { name: "Clerk" },
      { name: "Zod" },
      { name: "Vercel" },
      { name: "Tailwind" },
    ],
    imageUrl: "/image-alchemy.png",
    detailPageUrl: "/projects/image-alchemy",
    backgroundColor: "#6AD5BA38",
  },
  {
    id: "note-it",
    title: "Note-it",
    description:
      "A note taking app with users, the ability to add notes, and delete notes.",
    technologies: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Node" },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "Tailwind" },
    ],
    imageUrl: "/note-it.png",
    detailPageUrl: "/projects/note-it",
    backgroundColor: "#3E66AF21",
  },
  {
    id: "job-board",
    title: "Job Board",
    description:
      "Job board website where you can create new job listings, and filter through existing listings to browse available jobs and read about them.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Clerk" },
      { name: "Zod" },
      { name: "Vercel" },
      { name: "PostgreSQL" },
      { name: "Tailwind" },
    ],
    imageUrl: "/job-board.png",
    detailPageUrl: "/projects/job-board",
    backgroundColor: "rgba(255,235,235,0.13)",
  },
  {
    id: "invoice-dashboard",
    title: "Invoice Dashboard",
    description:
      "Company dashboard that tracks invoices in real time, has a search function and displays dynamic data.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Vercel" },
      { name: "PostgreSQL" },
      { name: "Tailwind" },
    ],
    imageUrl: "/invoice-dashboard.png",
    detailPageUrl: "/projects/invoice-dashboard",
    backgroundColor: "#93C5FD35",
  },
];

const getTechnologyIcon = (name: string) => {
  switch (name) {
    case "React":
      return <ReactIcon />;
    case "MongoDB":
      return <MongoDBIconProjectTechnology />;
    case "Express":
      return <ExpressIcon />;
    case "Node":
      return <NodeIcon />;
    case "Next.js":
      return <NextIcon />;
    case "Clerk":
      return <ClerkIcon />;
    case "Zod":
      return <ZodIcon />;
    case "Vercel":
      return <VercelIcon />;
    case "PostgreSQL":
      return <PostgreSQLIcon />;
    case "Railway":
      return <RailwayIcon />;
    case "Tailwind":
      return <TailwindIcon />;
    case "Stripe":
      return <StripeIcon />;
    default:
      return null;
  }
};

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects - Raymie Segars</title>
        <meta
          name="description"
          content="Discover projects developed by Raymie Segars, featuring technologies like React, MongoDB, and Next.js."
        />
        <meta property="og:title" content="Projects - Raymie Segars" />
        <meta
          property="og:description"
          content="Explore the innovative projects by Raymie Segars, showcasing skills in web development and software engineering."
        />
        {/* <meta property="og:image" content="/path-to-your-image.jpg" />{" "} */}
        {/* Replace with a relevant image path */}
        <meta property="og:type" content="website" />
      </Head>
      <main className="flex justify-center">
        <div className="max-w-full p-4">
          <h1 className="mb-6 text-center text-3xl font-bold">My Projects</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: Project, index: number) => (
              <Link
                legacyBehavior
                key={project.id}
                href={project.detailPageUrl}
                passHref
              >
                <a
                  className="block overflow-hidden rounded-lg border shadow-lg transition-shadow hover:border-gray-300 hover:shadow-xl"
                  style={{
                    backgroundColor: project.backgroundColor,
                  }}
                >
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={project.imageUrl}
                      alt={`Raymie Segars Project - ${project.title}`}
                      height={225}
                      width={400}
                      className="h-48 rounded-md border-2 border-gray-300 object-cover shadow-md dark:border-gray-700"
                    />
                  </div>
                  <div className="px-4 py-2">
                    <p className="min-h-28">{project.description}</p>{" "}
                  </div>
                  <div className="mb-2 ml-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                      >
                        {getTechnologyIcon(tech.name)}
                      </span>
                    ))}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
