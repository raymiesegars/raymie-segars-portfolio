import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import StarsCanvas from "@/components/StarBackground";
import { StarCanvasProvider } from "@/components/StarCanvasContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://raymiesegars.com'),
  title: {
    template: "%s | Raymie Segars",
    default: "Raymie Segars | Full-Stack Developer Portfolio",
  },
  description: "Freelance full-stack web developer available for hire. 1.5 years of professional experience specializing in Next.js, React, Three.js, and TypeScript. Building immersive web experiences, custom applications, and scalable solutions. Available for client projects.",
  keywords: [
    "Raymie Segars",
    "full-stack developer",
    "web developer",
    "freelance web developer",
    "hire web developer",
    "freelance developer",
    "web developer for hire",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Three.js developer",
    "portfolio",
    "software engineer",
    "Asheville developer",
    "North Carolina developer",
    "WebXR",
    "3D web development",
    "custom web development",
    "freelance software engineer",
    "full-stack developer freelance",
    "AI developer",
    "LangChain developer",
    "vector database",
    "RAG systems",
    "OpenAI integration",
    "web application developer",
    "solo developer",
    "independent contractor",
    "remote developer",
    "freelance programmer",
  ],
  authors: [{ name: "Raymie Segars" }],
  creator: "Raymie Segars",
  publisher: "Raymie Segars",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raymiesegars.com",
    siteName: "Raymie Segars Portfolio",
    title: "Raymie Segars | Freelance Full-Stack Web Developer",
    description: "Freelance full-stack web developer available for hire. 1.5 years of professional experience specializing in Next.js, React, Three.js, and TypeScript. Available for client projects.",
    // Add your Open Graph image when available
    // images: [
    //   {
    //     url: "https://raymiesegars.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Raymie Segars - Full-Stack Developer",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymie Segars | Freelance Full-Stack Web Developer",
    description: "Freelance full-stack web developer available for hire. 1.5 years of professional experience specializing in Next.js, React, Three.js, and TypeScript. Available for client projects.",
    creator: "@raymiesegarsiv",
    // Add your Twitter image when available
    // images: ["https://raymiesegars.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://raymiesegars.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raymie Segars',
    url: 'https://raymiesegars.com',
    image: 'https://raymiesegars.com/raymie.jpg',
    jobTitle: 'Freelance Full-Stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Web Development Services',
        description: 'Freelance full-stack web development services including custom web applications, 3D web experiences, and API development',
      },
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Asheville-Buncombe Technical Community College',
    },
    sameAs: [
      'https://github.com/raymiesegars',
      'https://www.linkedin.com/in/raymie-segars/',
      'https://twitter.com/raymiesegarsiv',
      'https://linktr.ee/raymiesegars',
    ],
    knowsAbout: [
      'Web Development',
      'Full-Stack Development',
      'Next.js',
      'React',
      'TypeScript',
      'Three.js',
      'WebXR',
      '3D Web Development',
      'AI Development',
      'Machine Learning',
      'LangChain',
      'Vector Databases',
      'RAG Systems',
      'OpenAI Integration',
      'AI Video Generation',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Raymie Segars Portfolio',
    url: 'https://raymiesegars.com',
    description: 'Full-stack developer portfolio showcasing web applications and 3D experiences',
    author: {
      '@type': 'Person',
      name: 'Raymie Segars',
    },
  };

  return (
    <StarCanvasProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
        </head>
        <body className="flex min-h-screen flex-col justify-between p-1">
          <ThemeProvider attribute="class">
            <Navbar />
            <main className="mx-auto px-3 py-10 ">
              <StarsCanvas />
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StarCanvasProvider>
  );
}
