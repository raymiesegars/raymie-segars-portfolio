"use client";

import { ClickHereIcon } from "@/components/ui/ClickHere";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>3D Sailing Environment</H1>
      <hr className="border-muted" />
      
      <section className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <H2>Project Link</H2>
          <div className="flex items-center">
            <ClickHereIcon />
            <a
              href="https://thousand-sunny.raymiesegars.com"
              className="flex items-center justify-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "150px",
                minHeight: "50px",
                backgroundColor: "#FF8C4255",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FF8C4255";
              }}
            >
              <span className="w-80 text-center text-2xl font-semibold tracking-tight">
                Visit Site
              </span>
            </a>
          </div>
        </div>
        <hr className="border-muted" />
        <H2>About The Project</H2>
        <p className="p-2">
          This is a 3D sailing experience I built inspired by One Piece. You can sail around in a ship using 
          controls similar to World of Warcraft - WASD movement with mouse look. The water is custom-made with 
          animations, and there are islands and objects scattered around that you can collide with. There&apos;s also 
          a border barrier so you can&apos;t sail outside the playable area. Works on both desktop and mobile - mobile 
          has a joystick control option.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Features</H2>
        <ul className="list-inside list-disc space-y-2">
          <li className="p-2">
            <strong>WoW-style controls:</strong> Move with WASD and look around with the mouse, just like World 
            of Warcraft. There&apos;s an onscreen control visualization so you can see what&apos;s happening.
          </li>
          <li className="p-2">
            <strong>Mobile joystick:</strong> On mobile devices, there&apos;s a joystick control option that works 
            pretty well for touch screens.
          </li>
          <li className="p-2">
            <strong>Custom water:</strong> The ocean is a custom mesh I built with animations. It moves and 
            reacts as you sail through it.
          </li>
          <li className="p-2">
            <strong>Collidable islands:</strong> There are islands and objects in the ocean that you can bump 
            into - collision detection is working for all of them.
          </li>
          <li className="p-2">
            <strong>Boundary barrier:</strong> There&apos;s an invisible wall around the playable area so you can&apos;t 
            sail off into infinity.
          </li>
          <li className="p-2">
            <strong>Music:</strong> Background music plays while you sail, and there&apos;s a volume slider to control it.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      {/* Mobile Joystick Image Section */}
      <section className="space-y-3">
        <H2>Mobile Experience</H2>
        <p className="p-2">
          On mobile, there&apos;s a joystick control option that works pretty well. You can see it in action below - 
          it&apos;s positioned on the left side of the screen and gives you full control over the ship&apos;s movement.
        </p>
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg border bg-muted/50 shadow-sm">
          <div className="relative" style={{ paddingBottom: "198.3%" }}>
            <Image
              src="/thousand-sunny-joystick.png"
              alt="Mobile joystick interface for 3D Sailing Environment"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Tech Stack</H2>
        <p className="p-2">
          Built with <strong>Next.js</strong>, <strong>React</strong>, and <strong>Three.js</strong> for the 3D 
          rendering. Used <strong>TypeScript</strong> throughout for type safety. The custom water mesh was 
          probably the trickiest part - had to optimize it to keep performance smooth while still having nice 
          animations. Collision detection handles the ship hitting islands and objects, and the boundary 
          system keeps you from sailing too far out.
        </p>
        <p className="p-2">
          Mobile support took some work to get the joystick controls feeling right. Had to handle touch events 
          properly and make sure the joystick responded well on different screen sizes. The audio system is 
          pretty straightforward - just background music with a volume slider.
        </p>
      </section>
    </section>
  );
}
