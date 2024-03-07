"use client";

import Technologies from "@/components/Technologies";
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
      <H1>Job Board</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <H2>Project Link</H2>
          <div className="flex items-center">
            <ClickHereIcon />
            <a
              href="https://job-board.raymiesegars.com/"
              className="flex items-center justify-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "150px",
                minHeight: "50px",
                backgroundColor: "rgba(255,235,235,0.13)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,235,235,0.13)";
              }}
            >
              <span className="w-80 text-center text-2xl font-semibold tracking-tight">
                Job Board
              </span>
            </a>
          </div>
        </div>
        <hr className="border-muted" />
        <H2>About The Site</H2>
        <p className="p-2">
          This Job Board website provides a comprehensive platform for job
          seekers and employers alike. With its intuitive interface and robust
          features, it simplifies the process of creating and browsing job
          listings. Whether you&apos;re looking for a new opportunity or seeking
          talented candidates, Job Board has you covered.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            Create Job Listings: Users can easily create detailed job listings,
            providing essential information such as job type, description,
            salary, location, and more.
          </li>
          <li className="p-2">
            Advanced Filtering: The website offers advanced filtering options,
            allowing users to refine their job search based on various criteria,
            including job type, description, salary, and location.
          </li>
          <li className="p-2">
            Browsing Jobs: Job seekers can explore a wide range of job listings,
            presented in a user-friendly format. They can browse through
            available jobs and access detailed information about each listing.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="p-2">
          The Job Board website is built upon a robust technological foundation
          that integrates various cutting-edge tools and frameworks to deliver a
          seamless and efficient user experience. Leveraging Next.js for
          server-side rendering ensures optimal performance and search engine
          visibility, while React empowers dynamic and interactive frontend
          development. Clerk and Zod handle user authentication, authorization,
          and data validation, ensuring secure access and maintaining data
          integrity.{" "}
        </p>
        <p className="p-2">
          Vercel serves as the hosting and deployment platform, providing
          scalability and reliability. PostgreSQL manages backend data storage
          efficiently, and Tailwind CSS streamlines styling and design,
          resulting in a visually appealing and intuitive interface. Together,
          these technologies form a cohesive ecosystem that powers the Job Board
          website, offering advanced features and functionality for both job
          seekers and employers.{" "}
        </p>
      </section>
    </section>
  );
}
