"use client";

import { DiscordIcon } from "@/components/ui/AboutIcons/DiscordIcon";
import { GithubIcon } from "@/components/ui/AboutIcons/GithubIcon";
import { LinkedInIcon } from "@/components/ui/AboutIcons/LinkedInIcon";
import { TwitterIcon } from "@/components/ui/AboutIcons/TwitterIcon";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { useState } from "react";

interface Socials {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

const socialMedia = [
  {
    name: "Github",
    Icon: GithubIcon,
    url: "https://github.com/raymiesegars",
    backgroundColor: "rgba(255,255,255,0.13)",
  },
  {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/raymie-segars/",
    backgroundColor: "#0A66C255",
  },
  {
    name: "Discord",
    Icon: DiscordIcon,
    url: "https://www.discordapp.com/users/166250037326643200/",
    backgroundColor: "#5865F255",
  },
  {
    name: "Twitter",
    Icon: TwitterIcon,
    url: "https://twitter.com/raymiesegarsiv",
    backgroundColor: "#E7E9EA55",
  },
];

export default function Page() {
  const [iconSize, setIconSize] = useState(55);

  return (
    <main className="max-w-3xl space-y-6">
        <H1>Social Media</H1>

        <nav className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {socialMedia.map((tech, index) => (
            <a
              key={index}
              href={tech.url}
              className="flex items-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minWidth: "150px",
                minHeight: "100px",
                backgroundColor: tech.backgroundColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = tech.backgroundColor;
              }}
            >
              <div className="flex items-center justify-start">
                <div className="flex h-16 w-16 items-center justify-center">
                  <tech.Icon
                    className="text"
                    width={iconSize}
                    height={iconSize}
                  />
                </div>
                <span className="ml-3">{tech.name}</span>
              </div>
            </a>
          ))}
        </nav>

        <hr className="border-muted" />

        <section className="space-y-3">
          <H2>Business inquiries</H2>
          <p>
            If you want to work with me on a project please contact me via email
            in the bottom right of any page{" "}
          </p>
        </section>
      </main>
  );
}
