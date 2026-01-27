"use client";

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
import { Seedling } from "@/components/ui/ProjectIcons/Seedling";
import { Tutorial } from "@/components/ui/ProjectIcons/Tutorial";
import { ClientWork } from "@/components/ui/ProjectIcons/ClientWork";
import { Deprecated } from "@/components/ui/ProjectIcons/Deprecated";
import { FC } from "react";
import ProgressBar from "@/components/ui/ProjectIcons/CircularProgressBar";
import { CircularProgressbar } from "react-circular-progressbar";
import { ThreejsIcon } from "@/components/ui/AboutIcons/ThreejsIcon";
import { NeonDBIcon } from "@/components/ui/AboutIcons/NeonDBIcon";
import { SupabaseIcon } from "@/components/ui/AboutIcons/SupabaseIcon";
import { ReactThreeFiberIcon } from "@/components/ui/AboutIcons/ReactThreeFiberIcon";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  detailPageUrl: string;
  backgroundColor: string;
  isOriginal: boolean;
  isTutorial: boolean;
  isClientWork: boolean;
  isDeprecated: boolean;
  completeness: number;
}

interface Technology {
  name: string;
}

const projects: Project[] = [
  {
    id: "3d-sailing-environment",
    title: "3D Sailing Environment",
    description:
      "A 3D sailing game inspired by One Piece where you can sail around in a ship using WoW-style controls. Features custom animated water, collidable islands, music with volume control, and mobile joystick support.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Three.js" },
      { name: "TypeScript" },
    ],
    imageUrl: "/thousand-sunny.png",
    detailPageUrl: "/projects/3d-sailing-environment",
    backgroundColor: "#FF8C4238",
    isOriginal: true,
    isTutorial: false,
    isClientWork: false,
    isDeprecated: false,
    completeness: 75,
  },
  {
    id: "rupee-clicker",
    title: "Rupee Clicker",
    description:
      "Idle Zelda inspired clicker game where you click to earn rupees, and can spend them on upgrades to earn more rupees per second passively.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Vercel" },
      { name: "Three.js" },
      { name: "MongoDB" },
      { name: "Tailwind" },
    ],
    imageUrl: "/rupee-clicker.png",
    detailPageUrl: "/projects/rupee-clicker",
    backgroundColor: "#64FE8765",
    isOriginal: true,
    isTutorial: false,
    isClientWork: false,
    isDeprecated: false,
    completeness: 15,
  },
  {
    id: "fastroots",
    title: "FastRoots",
    description:
      "A comprehensive platform for Hendersonville County that helps manage food relief efforts across Asheville, tracking all food shelters and relief centers with detailed metrics and information.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "PostgreSQL" },
      { name: "Tailwind" },
      { name: "NeonDB" },
    ],
    imageUrl: "/fastroots.png",
    detailPageUrl: "/projects/fastroots",
    backgroundColor: "#174B2D38",
    isOriginal: false,
    isTutorial: false,
    isClientWork: true,
    isDeprecated: false,
    completeness: 100,
  },
  {
    id: "prismdemo",
    title: "Prism Demo",
    description:
      "3D web and VR site that can be toggled to view models in 3D between the browser and VR headset. Includes the ability to walk around and teleport in VR to view models to scale.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Three.js" },
      { name: "React Three Fiber" },
    ],
    imageUrl: "/prismdemo.png",
    detailPageUrl: "/projects/prismdemo",
    backgroundColor: "#45486A38",
    isOriginal: false,
    isTutorial: false,
    isClientWork: true,
    isDeprecated: true,
    completeness: 100,
  },
  {
    id: "agendakeeper",
    title: "Agenda Keeper",
    description:
      "Agenda app for companies to plan out meetings, take notes with real-time collaboration and calendar integration.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "PostgreSQL" },
      { name: "Tailwind" },
      { name: "Supabase" },
    ],
    imageUrl: "/agendakeeper.png",
    detailPageUrl: "/projects/agendakeeper",
    backgroundColor: "#21AAAF38",
    isOriginal: false,
    isTutorial: false,
    isClientWork: true,
    isDeprecated: false,
    completeness: 100,
  },
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
    isOriginal: true,
    isTutorial: false,
    isClientWork: false,
    isDeprecated: true,
    completeness: 95,
  },
  {
    id: "three.js-tutorial",
    title: "Three.js Tutorial with Next.js",
    description:
      "JSM Three.js tutorial using Next.js instead of React, with some changes.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Three.js" },
      { name: "Vercel" },
      { name: "Tailwind" },
    ],
    imageUrl: "/threejs-tutorial.png",
    detailPageUrl: "/projects/three.js-tutorial",
    backgroundColor: "#d77f5d75",
    isOriginal: false,
    isTutorial: true,
    isClientWork: false,
    isDeprecated: false,
    completeness: 99,
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
    isOriginal: false,
    isTutorial: true,
    isClientWork: false,
    isDeprecated: true,
    completeness: 90,
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
    isOriginal: false,
    isTutorial: true,
    isClientWork: false,
    isDeprecated: true,
    completeness: 99,
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
    isOriginal: false,
    isTutorial: true,
    isClientWork: false,
    isDeprecated: true,
    completeness: 99,
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
    isOriginal: false,
    isTutorial: true,
    isClientWork: false,
    isDeprecated: true,
    completeness: 99,
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
    case "Three.js":
      return <ThreejsIcon />;
    case "NeonDB":
      return <NeonDBIcon />;
    case "Supabase":
      return <SupabaseIcon />;
    case "React Three Fiber":
    case "React3Fiber":
      return <ReactThreeFiberIcon />;
    default:
      return null;
  }
};

const Original: FC<{ isOriginal: boolean }> = ({ isOriginal }) =>
  isOriginal ? (
    <Seedling className="h-6 w-6 text-yellow-500" />
  ) : null;

const TutorialConcept: FC<{ isTutorial: boolean }> = ({ isTutorial }) =>
  isTutorial ? (
    <Tutorial className="h-6 w-6 text-yellow-500" />
  ) : null;

const ClientWorkBadge: FC<{ isClientWork: boolean }> = ({ isClientWork }) =>
  isClientWork ? (
    <ClientWork className="h-6 w-6 text-indigo-600" />
  ) : null;

const DeprecatedBadge: FC = () => (
  <Deprecated className="h-6 w-6" />
);

const ProjectsPage: FC = () => {
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
        <meta property="og:type" content="website" />
      </Head>

      <main className="flex justify-center">
        <div className="max-w-full p-4">
          <h1 className="mb-8 text-center text-3xl font-bold">My Projects</h1>
          
          {/* Legend Section */}
          <div className="mb-10 rounded-lg border bg-card p-4 shadow-sm sm:p-6">
            <h2 className="mb-4 text-center text-lg font-semibold text-muted-foreground sm:text-xl">
              Project Categories & Indicators
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {/* Original Projects */}
              <div className="flex items-center gap-3 rounded-md border bg-background p-3 transition-colors hover:bg-muted/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <Seedling className="h-8 w-8" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm font-semibold">Original Projects</span>
                  <span className="text-xs text-muted-foreground">100% original work</span>
                </div>
              </div>

              {/* Tutorial Concept */}
              <div className="flex items-center gap-3 rounded-md border bg-background p-3 transition-colors hover:bg-muted/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <Tutorial className="h-8 w-8" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm font-semibold">Tutorial Concept</span>
                  <span className="text-xs text-muted-foreground">Based on tutorials</span>
                </div>
              </div>

              {/* Client Work */}
              <div className="flex items-center gap-3 rounded-md border bg-background p-3 transition-colors hover:bg-muted/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <ClientWork className="h-8 w-8" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm font-semibold">Client Work</span>
                  <span className="text-xs text-muted-foreground">Professional projects</span>
                </div>
              </div>

              {/* Project Completion */}
              <div className="flex items-center gap-3 rounded-md border bg-background p-3 transition-colors hover:bg-muted/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <CircularProgressbar
                    className="h-8 w-8"
                    value={100}
                    text="100%"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm font-semibold">Completion</span>
                  <span className="text-xs text-muted-foreground">Project progress</span>
                </div>
              </div>

              {/* Deprecated */}
              <div className="flex items-center gap-3 rounded-md border bg-background p-3 transition-colors hover:bg-muted/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <Deprecated className="h-8 w-8" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm font-semibold">Deprecated</span>
                  <span className="text-xs text-muted-foreground">No longer live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const projectContent = (
                <>
                  {/* Badge Container - Absolutely positioned in top right */}
                  <div className="absolute right-3 top-3 z-10 flex flex-wrap items-center justify-end gap-1.5">
                    <Original isOriginal={project.isOriginal} />
                    <TutorialConcept isTutorial={project.isTutorial} />
                    <ClientWorkBadge isClientWork={project.isClientWork} />
                    {project.isDeprecated && <DeprecatedBadge />}
                  </div>

                  <div className="p-4">
                    <h2 className="pr-20 text-2xl font-semibold">
                      {project.title}
                    </h2>
                    <div
                      className="relative mt-4 w-full overflow-hidden rounded-md"
                      style={{
                        height: "225px",
                      }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={`Raymie Segars Project - ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <p className="mt-8 mb-0">{project.description}</p>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                        >
                          {getTechnologyIcon(tech.name)}
                        </span>
                      ))}
                    </div>
                    <ProgressBar
                      completeness={project.completeness}
                      text={project.completeness}
                    />
                  </div>
                </>
              );

              const wrapperClassName = `relative flex flex-col justify-between overflow-hidden rounded-lg border shadow-lg transition-shadow hover:border-gray-300 hover:shadow-xl`;
              const wrapperStyle = { backgroundColor: project.backgroundColor };

              return (
                <Link
                  key={project.id}
                  href={project.detailPageUrl}
                  className={wrapperClassName}
                  style={wrapperStyle}
                >
                  {projectContent}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
