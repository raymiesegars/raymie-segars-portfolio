import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
  
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://github.com/raymiesegars"
              className="text-primary hover:underline"
            >
              Github
            </a>
          </li>
          
          <li>
            <a
              href=""
              className="text-primary hover:underline"
            >
              Linked in
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      
      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project please contact me via email at{" "}
          <a
            href="mailto:raymievsegarsiv@gmail.com"
            className="text-primary hover:underline"
          >
            raymievsegarsiv@gmail.com
          </a>
        </p>
      </section>
    </section>
  );
}
