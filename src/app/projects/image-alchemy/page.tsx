"use client";

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";

export default function Page() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Image Alchemy</H1>
      <hr className="border-muted" />
      <section className="flex flex-col space-y-3">
        <H2>About The Site</H2>
        <p className="p-2">
          The Image Alchemy website allows users to securely create accounts
          and receive 10 free credits upon registration. These credits can be
          used to transform uploaded images and save them publicly on the site.
          Users have the option to purchase additional credits using Stripe
          integration.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Key Features</H2>
        <ul className="list-inside list-disc">
          <li className="p-2">
            Secure Account Creation: Users can create accounts securely to access
            the platforms features.
          </li>
          <li className="p-2">
            Free Credits: Users receive 10 free credits upon registration to
            start using the image transformation services.
          </li>
          <li className="p-2">
            Image Transformation: Users can upload images and transform them
            using the allocated credits.
          </li>
          <li className="p-2">
            Public Image Storage: Transformed images can be saved publicly on
            the website.
          </li>
          <li className="p-2">
            Credit Purchase: Users have the option to purchase additional credits
            using Stripe integration.
          </li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technological Foundation</H2>
        <p className="p-2">
          Image Alchemy is built on Next.js, integrating Clerk for user
          authentication, Stripe for payment processing, MongoDB for database
          management, and Tailwind CSS for rapid styling. The website is developed
          using TypeScript for enhanced type safety and development experience.
        </p>
      </section>
    </section>
  );
}
