"use client";

import { ClickHereIcon } from "@/components/ui/ClickHere";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Agenda Keeper</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <H2>Project Link</H2>
          <div className="flex items-center">
            <ClickHereIcon />
            <a
              href="https://app.agendakeeper.com/keeper/agendas/01a8a70d-c871-47ec-b097-16d3145c44c3"
              className="flex items-center justify-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "150px",
                minHeight: "50px",
                backgroundColor: "#21AAAF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#21AAAF";
              }}
            >
              <span className="w-80 text-center text-2xl font-semibold tracking-tight">
                Agenda Keeper
              </span>
            </a>
          </div>
        </div>
        <hr className="border-muted" />
        <H2>About The Site</H2>
        <p className="leading-7">
          Agenda Keeper is a comprehensive meeting management application designed
          for companies and organizations to streamline their meeting planning,
          note-taking, and collaboration processes. Built as a collaborative
          project at Aktiga, this platform combines real-time collaboration
          features with seamless calendar integration to create a powerful tool
          for modern teams.
        </p>
        <p className="leading-7">
          The application enables teams to plan meetings, create detailed agendas,
          take notes collaboratively, and synchronize everything with their
          existing calendar systems. With real-time updates and collaborative
          editing, multiple team members can contribute simultaneously, ensuring
          that meeting information is always current and accessible.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc space-y-1 pl-4 leading-7">
          <li>
            <strong>Meeting Planning:</strong> Create and manage detailed meeting
            agendas with topics, time allocations, and participant assignments.
          </li>
          <li>
            <strong>Real-Time Collaboration:</strong> Multiple users can edit
            agendas and notes simultaneously with live updates visible to all
            participants instantly.
          </li>
          <li>
            <strong>Note-Taking:</strong> Comprehensive note-taking capabilities
            that allow team members to capture important points, action items, and
            decisions during meetings.
          </li>
          <li>
            <strong>Calendar Integration:</strong> Seamless synchronization with
            popular calendar applications, ensuring meetings are properly scheduled
            and reminders are sent automatically.
          </li>
          <li>
            <strong>Database Schema Design:</strong> Robust database architecture
            that efficiently manages users, meetings, agendas, notes, and
            relationships between entities.
          </li>
          <li>
            <strong>OAuth Authentication:</strong> Secure user authentication
            system that integrates with popular OAuth providers for easy access
            and enhanced security.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>My Contributions</H2>
        <p className="leading-7">
          As part of the development team at Aktiga, I played a significant role
          in building Agenda Keeper. My primary contributions included:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-4 leading-7">
          <li>
            <strong>Styling & UI Design:</strong> Heavily responsible for the
            application&apos;s visual design and styling, creating an intuitive and
            professional user interface that enhances the user experience.
          </li>
          <li>
            <strong>Collaborative Features:</strong> Implemented real-time
            collaboration functionality, enabling multiple users to work together
            seamlessly on agendas and notes.
          </li>
          <li>
            <strong>Real-Time Refreshing:</strong> Developed the real-time update
            system that keeps all users synchronized with the latest changes,
            ensuring everyone sees updates instantly.
          </li>
          <li>
            <strong>Database Schema:</strong> Designed and implemented the
            database schema, creating efficient data structures that support the
            application&apos;s complex relationships and requirements.
          </li>
          <li>
            <strong>OAuth Integration:</strong> Built the OAuth authentication
            system, enabling secure login through popular identity providers.
          </li>
        </ul>
        <p className="leading-7">
          This project provided valuable learning opportunities, particularly in
          working with Supabase tooling and implementing complex real-time features
          that require careful state management and synchronization.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="leading-7">
          Agenda Keeper leverages a modern technology stack built on Next.js and
          React, providing a fast, responsive user experience. The application
          utilizes Supabase for backend services, including database management,
          real-time subscriptions, and authentication.
        </p>
        <p className="leading-7">
          PostgreSQL serves as the underlying database, managed through Supabase&apos;s
          powerful tooling. This setup enables efficient data management, complex
          queries, and real-time data synchronization across all connected clients.
        </p>
        <p className="leading-7">
          Tailwind CSS powers the styling system, enabling rapid development of a
          cohesive, modern interface. The design emphasizes clarity and usability,
          ensuring that teams can focus on their meetings rather than struggling
          with the tool itself.
        </p>
        <p className="leading-7">
          The integration of Supabase&apos;s real-time capabilities allows for
          instant updates across all users, creating a truly collaborative
          experience. This project demonstrated the power of modern development
          tools and frameworks in building sophisticated applications efficiently.
        </p>
      </section>

      <hr className="border-muted" />
    </section>
  );
}
