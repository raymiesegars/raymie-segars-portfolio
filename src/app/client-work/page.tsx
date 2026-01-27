import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Client Work",
  description: "Hire Raymie Segars - Freelance full-stack web developer available for projects. Specializing in Next.js, React, TypeScript, Three.js, AI integration, and custom web applications. Solo developer with professional contacts for larger scale projects. Based in Asheville, North Carolina.",
  keywords: [
    "freelance web developer",
    "hire web developer",
    "freelance developer",
    "full-stack developer for hire",
    "web developer freelance",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "custom web development",
    "web application developer",
    "freelance software engineer",
    "solo developer",
    "independent contractor",
    "remote developer",
    "freelance programmer",
    "web developer Asheville",
    "North Carolina web developer",
    "AI developer",
    "LangChain developer",
    "vector database developer",
    "RAG systems developer",
    "OpenAI integration",
    "3D web developer",
    "WebXR developer",
  ],
  openGraph: {
    title: "Client Work - Hire Raymie Segars | Freelance Web Developer",
    description: "Freelance full-stack web developer available for projects. Specializing in Next.js, React, TypeScript, Three.js, AI integration, and custom web applications. Solo developer with professional contacts for larger scale projects.",
    url: "https://raymiesegars.com/client-work",
  },
  twitter: {
    card: "summary",
    title: "Client Work - Hire Raymie Segars | Freelance Web Developer",
    description: "Freelance full-stack web developer available for projects. Specializing in Next.js, React, TypeScript, Three.js, AI integration, and custom web applications. Solo developer with professional contacts for larger scale projects.",
  },
  alternates: {
    canonical: "https://raymiesegars.com/client-work",
  },
};

export default function ClientWorkPage() {
  return (
    <section className="max-w-3xl space-y-6">
      <H1>Client Work</H1>
      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Freelance Full-Stack Web Developer</H2>
        <p className="leading-7">
          I&apos;m a freelance full-stack web developer available to take on projects of all sizes. 
          Whether you need a complete web application built from scratch, an existing project enhanced, 
          or a custom solution for your business, I can handle it solo from front-end to back-end.
        </p>
        <p className="leading-7">
          With 1.5 years of professional experience and a passion for building innovative web solutions, 
          I bring both technical expertise and creative problem-solving to every project. I work 
          independently, managing the entire development process from initial concept to deployment.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>What I Can Build</H2>
        <p className="leading-7">
          I specialize in full-stack web development and can work on a wide range of projects:
        </p>
        <ul className="list-inside list-disc space-y-2 leading-7">
          <li>Custom web applications and platforms</li>
          <li>E-commerce and business websites</li>
          <li>3D web experiences and WebXR applications</li>
          <li>Real-time collaborative applications</li>
          <li>API development and backend systems</li>
          <li>Database design and implementation</li>
          <li>Mobile-responsive web applications</li>
          <li>Performance optimization and scaling</li>
        </ul>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>AI & Machine Learning</H2>
        <p className="leading-7">
          I have extensive experience working with AI technologies and configuration, including:
        </p>
        <ul className="list-inside list-disc space-y-2 leading-7">
          <li><strong>AI Text & Voice Generation:</strong> Integrating OpenAI APIs for text generation and voice synthesis</li>
          <li><strong>RAG Systems:</strong> Building Retrieval Augmented Generation systems using LangChain for intelligent, context-aware AI applications</li>
          <li><strong>Vector Databases:</strong> Working with vector databases (Astra DB, Pinecone) for semantic search and similarity matching</li>
          <li><strong>AI Video Generation:</strong> Built a lip syncing app using AI video generation technologies</li>
          <li><strong>AI-Powered Chatbots:</strong> Creating intelligent chatbots with RAG capabilities that can answer questions and provide relevant information</li>
          <li><strong>Embeddings & Semantic Search:</strong> Implementing embedding models and semantic search for enhanced AI functionality</li>
        </ul>
        <p className="leading-7 pt-2">
          This website features a custom AI chatbot that demonstrates my RAG implementation, using vector 
          databases and LangChain to provide intelligent, context-aware responses about my work and experience.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Technologies & Skills</H2>
        <p className="leading-7">
          I work with modern technologies and frameworks to deliver high-quality solutions:
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold">Frontend</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Next.js & React</li>
              <li>TypeScript</li>
              <li>Three.js & WebXR</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Backend & Database</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Node.js & Express</li>
              <li>PostgreSQL & MongoDB</li>
              <li>Supabase & NeonDB</li>
              <li>RESTful APIs</li>
              <li>Authentication Systems</li>
            </ul>
          </div>
        </div>
        <p className="leading-7 pt-2">
          I&apos;m always learning and can adapt to your project&apos;s specific technology requirements.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>How I Work</H2>
        <p className="leading-7">
          As a solo full-stack developer, I handle every aspect of your project:
        </p>
        <ul className="list-inside list-disc space-y-2 leading-7">
          <li><strong>Planning & Architecture:</strong> I work with you to understand your needs and design a solution that fits your goals</li>
          <li><strong>Development:</strong> I build both front-end and back-end components, ensuring everything works seamlessly together</li>
          <li><strong>Testing & Quality:</strong> I ensure your application is reliable, performant, and user-friendly</li>
          <li><strong>Deployment:</strong> I can help deploy your project to platforms like Vercel, Railway, or your preferred hosting solution</li>
          <li><strong>Ongoing Support:</strong> I&apos;m available for maintenance, updates, and feature additions after launch</li>
        </ul>
        <p className="leading-7 pt-2">
          <strong>Scalability:</strong> While I typically work solo, if your project scope ends up being 
          too large to handle alone, I have professional software engineer contacts that can help with 
          larger scale projects at affordable rates. This ensures we can deliver quality results regardless 
          of project size.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Get In Touch</H2>
        <p className="leading-7">
          Interested in working together? I&apos;d love to hear about your project. Reach out through 
          any of the following methods:
        </p>
        <div className="space-y-4 rounded-lg border bg-card p-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Email</p>
              <a 
                href="mailto:raymievsegarsiv@gmail.com" 
                className="text-primary hover:underline"
              >
                raymievsegarsiv@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Phone</p>
              <a 
                href="tel:+18439058169" 
                className="text-primary hover:underline"
              >
                (843) 905-8169
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ExternalLink className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Website</p>
              <a 
                href="https://raymiesegars.com" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                raymiesegars.com
              </a>
            </div>
          </div>
        </div>
        <p className="leading-7 text-sm text-muted-foreground">
          You can also use the contact form in the navigation bar, or check out my{" "}
          <Link href="/projects" className="text-primary hover:underline">
            projects
          </Link>{" "}
          to see examples of my work.
        </p>
      </section>

      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Ready to Start Your Project?</H2>
        <p className="leading-7">
          Whether you have a clear vision or just an idea, I&apos;m here to help bring it to life. 
          Let&apos;s discuss your project and see how I can help you achieve your goals.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="mailto:raymievsegarsiv@gmail.com?subject=Project Inquiry">
              Send Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>
      </section>
    </section>
  );
}
