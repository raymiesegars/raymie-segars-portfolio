"use client";

import { ClickHereIcon } from "@/components/ui/ClickHere";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Three.js Island Adventure</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <H2>Project Link</H2>
          <div className="flex items-center">
            <ClickHereIcon />
            <a
              href="https://three-js-project-beta.vercel.app/"
              className="flex items-center justify-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "150px",
                minHeight: "50px",
                backgroundColor: "#d77f5d85",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#d77f5d85";
              }}
            >
              <span className="w-80 text-center text-2xl font-semibold tracking-tight">
                Visit Island
              </span>
            </a>
          </div>
        </div>
        <hr className="border-muted" />
        <H2>About The Experience</H2>
        <p className="p-2">
          Explore a stunning virtual island created with Three.js and Next.js.
          This interactive tutorial showcases dynamic 3D models, captivating
          animations, and ambient music. Discover hidden links to my social
          profiles as you roam around this virtual environment.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Current Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            Dynamic 3D Models: Explore a variety of models designed with
            Three.js and React-three-fiber.
          </li>
          <li className="p-2">
            Interactive Animations: Engage with animations that breathe life
            into the virtual world.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Stack</H2>
        <p className="p-2">
          Leveraging the power of Next.js combined with Three.js, and
          React-three-fiber. The site features advanced loaders for handling
          complex model data, offering a seamless and immersive experience.
        </p>
      </section>
    </section>
  );
}
