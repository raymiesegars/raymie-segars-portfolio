"use client";

import { H1 } from "@/components/ui/H1";
import Image from "next/image";
import raymie from "@/assets/raymie.jpg";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raymie Segars | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Meet Raymie Segars, a full-stack developer from Asheville NC, specializing in innovative web applications."
        />
        <meta property="og:title" content="Home - Raymie Segars" />
        <meta
          property="og:description"
          content="Discover Raymie Segars, a full-stack developer passionate about building innovative web applications."
        />
        {/* <meta
          property="og:image"
          content="https://example.com/path-to-your-image.jpg"
        />{" "} */}
        {/* Replace with a relevant image path */}
        <meta property="og:type" content="website" />
      </Head>

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
            <div className="flex items-center">
              <Image src="/aktiga-logo.png" alt="team" width={50} height={50} />
              <p className="pr-1 text-center text-2xl font-bold sm:text-start pl-3">
                Proud to be a part of the Aktïga team!
              </p>
            </div>
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
        <section className="space-y-3 text-center">
          <H2>Ask the chatbot anything about me</H2>
          <p>
            Click the little <Bot className="inline pb-1" /> icon in the
            navigation bar to activate the AI chat. You can ask the chatbot any
            question about me and it will find the relevant info on this
            website. The bot can even provide links to pages you&apos;re looking
            for.
          </p>
        </section>
      </main>
    </>
  );
}
