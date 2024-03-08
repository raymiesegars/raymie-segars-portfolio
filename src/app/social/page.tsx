import { DiscordIcon } from "@/components/ui/AboutIcons/DiscordIcon";
import { GithubIcon } from "@/components/ui/AboutIcons/GithubIcon";
import { LinkedInIcon } from "@/components/ui/AboutIcons/LinkedInIcon";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <ul className="list-inside p-3">
          <li className="mb-3">
            <a
              href="https://github.com/raymiesegars"
              className="flex items-center text-primary hover:underline"
            >
              <GithubIcon className="mr-3" />
              <span className="ml-2">Github</span>
            </a>
          </li>
          <li className="mb-3">
            {" "}
            <a
              href="https://www.linkedin.com/in/raymie-segars/"
              className="flex items-center text-primary hover:underline"
            >
              <LinkedInIcon className="mr-3" /> 
              <span className="ml-2">LinkedIn</span>{" "}
            </a>
          </li>
          <li className="mb-3">
            {" "}
            <a
              href="https://www.discordapp.com/users/166250037326643200/"
              className="flex items-center text-primary hover:underline"
            >
              <DiscordIcon className="mr-3" /> 
              <span className="ml-2">Discord</span>{" "}
            </a>
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project please contact me via email
          in the bottom right of the <a href="/" className="text-blue-500">home</a> page{" "}
        </p>
      </section>
    </section>
  );
}
