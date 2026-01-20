"use client";

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Farmers Market Finds</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <H2>About The Site</H2>
        <p className="p-2">
          The Farmers Market Finds website revolutionizes the way vendors and
          visitors interact with farmers markets. It provides a comprehensive
          platform where vendors can sign up for upcoming markets, declare the
          goods they&#8217;ll be carrying, and set custom pricing.{" "}
        </p>
        <p className="p-2">
          With dedicated dashboards for vendors, site admins, and super-admins,
          users can access tailored features based on their permissions.
          Meanwhile, the general public enjoys free access to browse vendors,
          explore their offerings, and plan their farmers market visits
          conveniently.{" "}
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            Vendor Management: Vendors can register for future farmers markets,
            declare goods, and set pricing via personalized dashboards, ensuring
            seamless management of their market presence
          </li>
          <li className="p-2">
            User Roles: Different user roles, including vendors, site admins,
            and super-admins, offer customized access and functionality tailored
            to specific responsibilities and permissions
          </li>
          <li className="p-2">
            Visitors can explore detailed information about upcoming farmers
            markets, including participating vendors, goods available, and
            pricing, facilitating informed decision-making.
          </li>
          <li className="p-2">
            The website offers intuitive browsing features that allow visitors
            to discover vendors, explore their offerings, and plan their farmers
            market visits efficiently.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="p-2">
          The Farmers Market Finds website is built upon a robust technological
          framework, incorporating cutting-edge tools and frameworks to deliver
          a seamless user experience. Powered by Next.js and React, the frontend
          ensures responsiveness and interactivity, enabling smooth navigation
          and engagement.{" "}
        </p>
        <p className="p-2">
          Vercel serves as the hosting and deployment platform, ensuring
          scalability and reliability for uninterrupted service. PostgreSQL acts
          as the backend database, efficiently storing and managing data related
          to vendors, goods, and market information. Tailwind CSS facilitates
          rapid styling and customization, ensuring consistent and visually
          appealing designs across the website.{" "}
        </p>
        <p className="p-2">
          Additionally, Zod and Clerk provide essential functionalities for user
          authentication and data validation, enhancing security and
          reliability. Together, these technologies form the foundation of the
          Farmers Market Finds website, delivering advanced features and
          usability for both vendors and visitors.
        </p>
      </section>
    </section>
  );
}
