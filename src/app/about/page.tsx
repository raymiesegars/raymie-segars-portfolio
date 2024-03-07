import Technologies from "@/components/Technologies";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Raymie Segars and his work.",
};

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>About Me</H1>

      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p className="p-2">
          Hello, and welcome! My name is Raymie Segars, a passionate software
          developer based in Asheville, North Carolina. Embarking on my
          programming journey in 2022, I&apos;ve since been
          deeply immersed in the world of web and application development. My
          commitment to continuous learning and improvement has been the
          cornerstone of my journey, allowing me to tackle and create a diverse
          range of web application projects.{" "}
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
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p className="p-2">
          Besides programming, I enjoy sports and video games. I lift weights
          and snow ski. I also enjoy card games like Magic the Gathering. In my
          opinion having hobbies other than coding is important for mental
          health.
        </p>
      </section>
    </section>
  );
}
