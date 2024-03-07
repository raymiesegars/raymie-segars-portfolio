"use client";

import Technologies from "@/components/Technologies";
import { ClickHereIcon } from "@/components/ui/ClickHere";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Invoice Dashboard</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <H2>Project Link</H2>

          <div className="flex items-center">
            <ClickHereIcon />
            <a
              href="https://invoice-dashboard.raymiesegars.com/dashboard/invoices"
              className="flex items-center justify-center gap-3 rounded-lg border p-5 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "150px",
                minHeight: "50px",
                backgroundColor: "#93C5FD95",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#93C5FD95";
              }}
            >
              <span className="w-80 text-center text-2xl font-semibold tracking-tight">
                Invoice Dashboard
              </span>
            </a>
          </div>
        </div>
        <H3>Login Information</H3>
        <ul className="list-inside list-disc">
          <li className="p-2">username : user@nextmail.com</li>
          <li className="p-2">password : 123456</li>
        </ul>
        <hr className="border-muted" />
        <H2>About The Site</H2>
        <p className="p-2">
          The Invoice Dashboard website is a comprehensive tool designed to
          streamline invoice management for companies. It offers a centralized
          platform for users to log in and access detailed information about
          invoices, including their status, due dates, and payment history. With
          intuitive filtering and search functionalities, users can easily
          locate specific invoices based on various criteria, such as the person
          responsible for the invoice. This project prioritizes efficiency and
          convenience, empowering companies to stay organized and informed about
          their financial transactions.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            User Authentication: Secure login functionality ensures that only
            authorized users can access the dashboard, protecting sensitive
            financial data
          </li>
          <li className="p-2">
            Invoice Management: Users can view detailed information about
            invoices, including status, due dates, and payment details,
            facilitating efficient tracking and monitoring.
          </li>
          <li className="p-2">
            Filtering and Search: Robust filtering and search capabilities
            enable users to quickly locate specific invoices based on criteria
            such as the person responsible for the invoice, reducing time spent
            on manual searches.
          </li>
          <li className="p-2">
            Intuitive Interface: The dashboard features a user-friendly
            interface designed for ease of navigation and seamless interaction,
            enhancing the overall user experience.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="p-2">
          The Invoice Dashboard website is built on a solid technological
          foundation, leveraging modern tools and frameworks to deliver a
          reliable and efficient solution. Powered by Next.js and React, the
          frontend ensures responsiveness and interactivity, providing users
          with a dynamic and engaging interface. Vercel serves as the hosting
          and deployment platform, offering scalability and reliability for
          seamless performance.{" "}
        </p>
        <p className="p-2">
          PostgreSQL serves as the backend database, efficiently managing
          invoice data and supporting complex querying operations. Tailwind CSS
          facilitates rapid styling and customization, enabling consistent and
          visually appealing designs throughout the dashboard. Together, these
          technologies form a robust ecosystem that powers the Invoice Dashboard
          website, delivering advanced functionality and usability for effective
          invoice management.{" "}
        </p>
      </section>
    </section>
  );
}
