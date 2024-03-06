import Technologies from "@/components/Technologies";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>

      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          Hello, and welcome! My name is Raymie Segars, a passionate software
          developer based in Asheville, North Carolina. Embarking on my
          programming journey in 2022, at the age of 25, I&apos;ve since been
          deeply immersed in the world of web and application development. My
          commitment to continuous learning and improvement has been the
          cornerstone of my journey, allowing me to tackle and create a diverse
          range of web application projects.{" "}
        </p>
        <p>
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
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects in order to learn and
          develope new skills. If you would like to learn more about specific
          projects you can find more information on the projects page. Here is a
          list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li className="p-2">
            <a
              href="https://farmers-market-finds.raymiesegars.com/"
              className="text-primary hover:underline"
            >
              Farmers Market Finds
            </a>{" "}
            - Currently a work in progress. This website will allow a local
            farmers market to have vendors sign up and be approved by admins, in
            order to declare goods to be carried at specific markets. The
            website can then be used by the general public to browse upcoming
            markets and vendors.
          </li>

          <li className="p-2">
            <Link
              href="https://note-it.raymiesegars.com/"
              className="text-primary hover:underline"
            >
              Note-it
            </Link>{" "}
            - A simple note creation website where you can create an account and
            create simple notes. These notes save and can be deleted or edited.
          </li>

          <li className="p-2">
            <Link
              href="https://job-board.raymiesegars.com/"
              className="text-primary hover:underline"
            >
              Job Board
            </Link>{" "}
            - A simple job board built with next-js where you can filter job
            postings and create new job postings.
          </li>

          <li className="p-2">
            <Link
              href="https://invoice-dashboard.raymiesegars.com/"
              className="text-primary hover:underline"
            >
              Invoices Dashboard
            </Link>{" "}
            - After logging in with user: user@nextmail.com and password: 123456
            you will have access to a simple invoices dashboard for a company to
            track and search through invoices while tracking data.
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I enjoy sports and video games. I lift weights
          and snow ski. I also enjoy card games like Magic the Gathering. In my
          opinion having hobbies other than coding is important for mental
          health.
        </p>
      </section>
    </section>
  );
}
