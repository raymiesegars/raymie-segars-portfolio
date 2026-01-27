import Technologies from "@/components/Technologies";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Raymie Segars, a full-stack developer with 1.5 years of professional experience specializing in Next.js, React, Three.js, WebXR, and AI development.",
  openGraph: {
    title: "About Me - Raymie Segars",
    description: "Learn more about Raymie Segars and his work as a full-stack developer specializing in web development, 3D experiences, and AI integration.",
    url: "https://raymiesegars.com/about",
  },
  twitter: {
    card: "summary",
    title: "About Me - Raymie Segars",
    description: "Learn more about Raymie Segars and his work as a full-stack developer specializing in web development, 3D experiences, and AI integration.",
  },
  alternates: {
    canonical: "https://raymiesegars.com/about",
  },
};

export default function Page() {
  return (
    <main className="max-w-3xl space-y-6">
        <H1>About Me</H1>
        <section className="space-y-3">
          <H2>Who am I?</H2>
          <p className="p-2">
            Hello, and welcome! My name is Raymie Segars, a full stack web software engineer 
            based in Asheville, North Carolina. With 1.5 years of professional experience, 
            I&apos;ve been deeply immersed in the world of web and application development. 
            My commitment to continuous learning and improvement has been the cornerstone of my 
            journey, allowing me to tackle and create a diverse range of web application projects.
          </p>
          <p className="p-2">
            I&apos;ve worked on multiple client projects throughout my career, including a project 
            for Hendersonville County called FastRoots, where I contributed to building solutions 
            that serve the community. I also worked at Aktiga, where I built immersive VR applications, 
            combining my passion for web development with cutting-edge virtual reality technology.
          </p>
          <p className="p-2">
            I have extensive experience with AI technologies, including building RAG (Retrieval Augmented 
            Generation) systems, working with vector databases for semantic search, integrating OpenAI 
            APIs for AI text and voice generation, and creating AI-powered applications. I&apos;ve built 
            a lip syncing app using AI video generation, demonstrating my ability to work with cutting-edge 
            AI multimedia technologies.
          </p>
          <p className="p-2">
            I&apos;m passionate about building cool apps and websites and I love
            making friends who share similar passions.
          </p>
        </section>

        <hr className="border-muted" />

        <section className="space-y-3">
          <Technologies />
        </section>

        <hr className="border-muted" />
        <H2>Hobbies</H2>
        <section className="flex flex-col items-center space-y-3">
          <p className="p-2">
            Besides programming, I enjoy sports and video games. I lift weights
            and snow ski. I also enjoy card games like Magic the Gathering. In
            my opinion having hobbies other than coding is important for mental
            health.
          </p>
          <div className="flex justify-center">
            <Image
              src="/skiing.jpg"
              width={300}
              height={300}
              alt="Image of Raymie Segars and his friend skiing"
              className="aspect-square rounded-t-full border-2 object-cover shadow-md dark:border-foreground"
            />
          </div>
        </section>
      </main>
  );
}
