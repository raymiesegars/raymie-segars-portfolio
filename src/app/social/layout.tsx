import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "Connect with Raymie Segars on social media platforms like GitHub, LinkedIn, Discord, and Twitter.",
  openGraph: {
    title: "Social Media - Raymie Segars",
    description: "Follow Raymie Segars across various social media platforms to stay updated with the latest projects and collaborations.",
    url: "https://raymiesegars.com/social",
  },
  twitter: {
    card: "summary",
    title: "Social Media - Raymie Segars",
    description: "Follow Raymie Segars across various social media platforms to stay updated with the latest projects and collaborations.",
  },
  alternates: {
    canonical: "https://raymiesegars.com/social",
  },
};

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
