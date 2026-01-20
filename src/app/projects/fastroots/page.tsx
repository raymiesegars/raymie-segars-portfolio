"use client";

import { ClickHereIcon } from "@/components/ui/ClickHere";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>FastRoots</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <H2>Project Link</H2>
          <div className="flex items-center">
            <ClickHereIcon />
            <a
              href="https://www.fastroots.org/"
              className="flex items-center justify-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "150px",
                minHeight: "50px",
                backgroundColor: "#174B2D",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#174B2D";
              }}
            >
              <span className="w-80 text-center text-2xl font-semibold tracking-tight">
                FastRoots
              </span>
            </a>
          </div>
        </div>
        <hr className="border-muted" />
        <H2>About The Site</H2>
        <p className="leading-7">
          FastRoots is a comprehensive platform designed to streamline food relief
          efforts across Asheville and Hendersonville County. Built entirely from
          scratch as a client project for the Community Foundation of Henderson
          County, this application provides organizations with powerful tools to
          track, manage, and coordinate food shelters and relief centers
          throughout the region.
        </p>
        <p className="leading-7">
          The platform enables clients to maintain detailed records of all food
          relief facilities, including comprehensive metrics, operational details,
          and contact information. This centralized system helps coordinate
          efforts between multiple organizations, ensuring efficient distribution
          of resources and better support for communities in need.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc space-y-1 pl-4 leading-7">
          <li>
            <strong>Comprehensive Tracking:</strong> Track all food shelters and
            relief centers with detailed metrics, operational status, and contact
            information in a centralized database.
          </li>
          <li>
            <strong>Organization Management:</strong> Manage multiple relief
            organizations and their associated facilities, enabling efficient
            coordination across different groups.
          </li>
          <li>
          <strong>Detailed Metrics:</strong> Monitor and analyze key performance
            indicators for each facility, including capacity, distribution rates,
            and operational hours.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Intuitive design that makes
            it easy for staff members to quickly access and update information
            about relief centers.
          </li>
          <li>
            <strong>Real-Time Updates:</strong> Keep information current with
            real-time data synchronization across all users.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="leading-7">
          FastRoots is built on a modern, robust technology stack that ensures
          reliability, scalability, and performance. The application leverages
          Next.js and React to deliver a responsive, interactive user experience
          that works seamlessly across desktop and mobile devices.
        </p>
        <p className="leading-7">
          PostgreSQL serves as the primary database, providing robust data
          management capabilities for storing complex relational data about
          organizations, facilities, and metrics. The database is optimized for
          fast queries and efficient data retrieval, ensuring that users can
          access information quickly even as the dataset grows.
        </p>
        <p className="leading-7">
          Tailwind CSS powers the styling system, enabling rapid development of a
          cohesive, professional interface. The design emphasizes clarity and
          usability, ensuring that staff members can navigate the platform
          efficiently even during high-pressure situations.
        </p>
        <p className="leading-7">
          This project represents a complete end-to-end development effort,
          encompassing database design, API development, frontend implementation,
          and deployment. Every aspect of the application was built from the
          ground up, tailored specifically to meet the needs of the Community
          Foundation of Henderson County and their food relief coordination
          efforts.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Client</H2>
        <p className="leading-7">
          Developed for the Community Foundation of Henderson County, FastRoots
          serves as a critical tool in their mission to coordinate food relief
          efforts and support communities throughout the region.
        </p>
      </section>
    </section>
  );
}
