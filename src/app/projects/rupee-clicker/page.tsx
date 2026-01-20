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
      <H1>Rupee Clicker</H1>
      <hr className="border-muted" />
      
      {/* YouTube Video Embed */}
      <section className="space-y-3">
        <H2>Game Demo</H2>
        <div className="relative w-full overflow-hidden rounded-lg border bg-muted/50 shadow-sm" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/KPBpQY_Ys2A"
            title="Rupee Clicker example"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <hr className="border-muted" />
      
      <section className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <H2>Project Link</H2>
          <div className="flex items-center">
            <ClickHereIcon />
            <a
              href="https://rupee-clicker-game.vercel.app/"
              className="flex items-center justify-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "150px",
                minHeight: "50px",
                backgroundColor: "#64FE8755",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#64FE8755";
              }}
            >
              <span className="w-80 text-center text-2xl font-semibold tracking-tight">
                Rupee Clicker
              </span>
            </a>
          </div>
        </div>
        <hr className="border-muted" />
        <H2>About The Game</H2>
        <p className="p-2">
          Rupee Clicker is an engaging idle clicker game inspired by the iconic Zelda series. Set in the expansive Zelda universe, players accumulate Rupees, strategize upgrades, and embark on epic quests to defeat iconic enemies and bosses.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Current Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            Local Storage: Rupees are currently saved locally, allowing players to pick up where they left off.
          </li>
          <li className="p-2">
            Basic Clicker Mechanics: Start your adventure by collecting Rupees with each click. Simple yet addictive!
          </li>
        </ul>
        <H2>Planned Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            Cloud Data Saving: Implement cloud storage solutions with leaderboards to foster competitive play.
          </li>
          <li className="p-2">
            Comprehensive Upgrades: Expand the upgrade system with more helpers and multipliers to enhance gameplay.
          </li>
          <li className="p-2">
            Combat System: Introduce a gear and combat system where players can fight themed enemies and bosses from various Zelda games, each enhancing gameplay through unique items and boosts.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Stack</H2>
        <p className="p-2">
          Built using TypeScript, Next.js, and Vercel for robust, scalable deployment. Future implementations will leverage MongoDB for data management and Clerk for user authentication, ensuring a secure and efficient gaming experience.
        </p>
      </section>
    </section>
  );
}
