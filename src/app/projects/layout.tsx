import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover projects developed by Raymie Segars, featuring technologies like React, Next.js, Three.js, TypeScript, and more. Explore 3D web experiences, full-stack applications, and innovative web solutions.",
  openGraph: {
    title: "Projects - Raymie Segars",
    description: "Explore the innovative projects by Raymie Segars, showcasing skills in web development, 3D experiences, and software engineering.",
    url: "https://raymiesegars.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Raymie Segars",
    description: "Explore the innovative projects by Raymie Segars, showcasing skills in web development and software engineering.",
  },
  alternates: {
    canonical: "https://raymiesegars.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
