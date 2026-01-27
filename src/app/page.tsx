"use client";

import { H1 } from "@/components/ui/H1";
import Image from "next/image";
import raymie from "@/assets/raymie.jpg";
import { H2 } from "@/components/ui/H2";
import { Bot, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AIChatBox from "@/components/AIChatBox";

export default function Home() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <main className="max-w-3xl space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">
            Hi, I&apos;m Raymie 👋
          </H1>
          <p className="text-center sm:text-start">
            I&apos;m a full-stack developer from Asheville NC who enjoys
            building web applications using new innovative frameworks and
            technologies.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={raymie}
            alt="A photo of Raymie Segars"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <Briefcase className="h-5 w-5 text-primary" />
          <H2 className="text-center sm:text-start">Available for Client Work</H2>
        </div>
        <p className="text-center sm:text-start">
          I&apos;m a freelance full-stack developer available to take on projects. 
          Whether you need a custom web application, 3D web experience, or a complete 
          full-stack solution, I can handle it solo from concept to deployment.{" "}
          <Link href="/client-work" className="text-primary hover:underline font-semibold">
            Learn more about hiring me
          </Link>{" "}
          or check out my{" "}
          <Link href="/projects" className="text-primary hover:underline font-semibold">
            portfolio
          </Link>{" "}
          to see examples of my work.
        </p>
      </section>

      <section className="space-y-3 text-center">
        <div className="flex items-center gap-2 justify-center">
          <button
            onClick={() => setChatBoxOpen(true)}
            aria-label="Open AI Chat"
            className="flex items-center justify-center rounded-full p-1 transition-colors duration-150 hover:bg-[#31A8FF88]"
          >
            <Bot className="h-5 w-5 text-primary cursor-pointer" />
          </button>
          <H2>Ask the chatbot anything about me</H2>
        </div>
        <p>
          Click the{" "}
          <button
            onClick={() => setChatBoxOpen(true)}
            aria-label="Open AI Chat"
            className="inline-flex items-center text-primary hover:underline align-middle"
          >
            <Bot className="inline-block h-5 w-5 cursor-pointer align-middle" />
          </button>{" "}
          icon above or in the navigation bar to activate the AI chat. You can ask the chatbot any
          question about me and it will find the relevant info on this
          website. The bot can even provide links to pages you&apos;re looking
          for.
        </p>
      </section>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </main>
  );
}
