import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <H1>Privacy Policy</H1>
        <p>Last Updated: March 2024</p>
      </div>
      <div className="space-y-3">
        <H2>Welcome</H2>
        <p>
          Thank you for visiting my personal portfolio website. This Privacy Policy outlines how I handle information related to your visit and interaction with my portfolio, emphasizing my commitment to respect your privacy.
        </p>
        <H2>Collected Information</H2>
        <p>
          This website primarily serves as a showcase for my projects and skills. It does not collect personal information or require account creation.
        </p>
        <H3>1. Browsing Data</H3>
        <p>
          Standard internet log information is collected, akin to most websites, which may include details like your IP address, browser type and version, and page interaction details.
        </p>
        <H3>2. Communication</H3>
        <p>
          Should you choose to contact me via email, any provided information will be used solely to address your queries or feedback.
        </p>
        <H2>Use of Collected Data</H2>
        <p>The gathered information serves to:</p>
        <ul className="list-inside list-disc">
          <li>Ensure my website functions correctly.</li>
          <li>Enhance the website based on visitor interactions and feedback.</li>
          <li>Address inquiries and support requests efficiently.</li>
        </ul>
        <H2>Data Sharing</H2>
        <p>
          Your personal data is not for sale. Any shared aggregated information with partners or affiliates is strictly for website improvement and is not personally identifiable.
        </p>
        <H2>Security</H2>
        <p>
          I prioritize protecting your data but must note that no internet transmission or electronic storage method is entirely secure.
        </p>
        <H2>Policy Updates</H2>
        <p>
          Changes to this policy will be posted here and effective immediately, starting from its last revision date in March 2024. Regular reviews are recommended.
        </p>
        <H2>Get In Touch</H2>
        <p>
          For any privacy-related questions, feel free to email me at raymievsegarsiv@gmail.com
        </p>
      </div>
    </section>
  );
}
