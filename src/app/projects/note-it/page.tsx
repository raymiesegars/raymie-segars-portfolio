"use client";

import Technologies from "@/components/Technologies";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Note-it</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <H2>About The Site</H2>
        <p className="p-2">
          Note-it offers a user-friendly platform to capture, manage, and
          organize notes effortlessly. Seamlessly integrating modern
          technologies, Note-it empowers users to stay productive and organized
          with ease.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            User Authentication: Securely create an account with a unique
            username and password.
          </li>
          <li className="p-2">
            Note Creation and Editing: Easily compose and edit notes, with
            automatic timestamping for tracking revisions.
          </li>
          <li className="p-2">
            Note Management: Effortlessly manage notes, including viewing,
            editing, and deleting, to maintain an organized workspace.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="p-2">
          Built with React, MongoDB, Express, Node.js, Vercel, Railway, and
          Tailwind CSS, Note-it ensures optimal performance and reliability. The
          sleek design and intuitive interface enhance the note-taking
          experience, making it a valuable tool for users seeking productivity
          and organization.{" "}
        </p>
      </section>
    </section>
  );
}
