"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIChatButton";
import { useState } from "react";
import { MenuSquareIcon, XCircleIcon } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import Chat from "@/components/chat/chat";
import { SuccessModal } from "./ui/SuccessModal";
import { useStarCanvas } from "./StarCanvasContext";
import { Button } from "./ui/button";
import { StarIcon } from "./ui/AboutIcons/StarIcon";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleVisibility } = useStarCanvas();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const closeChat = () => {
    setIsCollapsed(false);
  };

  const onSubmitSuccess = () => {
    console.log("Email successfully sent!");
    setIsEmailSent(true);
    closeChat();
  };

  const downloadResume = async () => {
    try {
      const pdfBytes = await fetch("/raymie-segars-resume.pdf").then((res) =>
        res.arrayBuffer(),
      );

      const pdfDoc = await PDFDocument.load(pdfBytes);

      const pdfBlob = await pdfDoc.save();

      const pdfUrl = URL.createObjectURL(new Blob([pdfBlob as BlobPart]));

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);

      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <header className="bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-3 py-4 md:flex-nowrap">
        <nav className="hidden shrink-0 space-x-2 font-medium md:flex">
          <NavLink href="/">home</NavLink>
          <NavLink href="/client-work">client work</NavLink>
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/about">about me</NavLink>
          <NavLink href="/social">social media</NavLink>
        </nav>

        <div className="flex hidden shrink-0 items-center gap-3 md:flex">
          <AIChatButton  />
          <ThemeToggle />
          <button
            onClick={toggleVisibility}
            aria-label="Button to pause star background animation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-2 hover:bg-[#31A8FF88]"
          >
            <StarIcon />
          </button>
          <button
            className="whitespace-nowrap cursor-pointer rounded-md bg-[#31A8FF65] hover:bg-[#31a9ff99] px-4 py-2 shrink-0"
            onClick={downloadResume}
            aria-label="Download Resume"
          >
            Resume
          </button>
        </div>

        <Chat
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          onSubmitSuccess={onSubmitSuccess}
        />

        <SuccessModal
          isOpen={isEmailSent}
          onClose={() => setIsEmailSent(false)}
        />

        <div className="absolute right-0 top-0 flex md:hidden">
          {" "}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-[#31A8FF65] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XCircleIcon className="block h-12 w-12" aria-hidden="true" />
            ) : (
              <MenuSquareIcon className="block h-12 w-12" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="flex flex-col items-center space-y-3 px-2 pb-3 pt-3 sm:px-3">
            <NavLink href="/">home</NavLink>
            <NavLink href="/client-work">client work</NavLink>
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/about">about me</NavLink>
            <NavLink href="/social">social media</NavLink>
            <AIChatButton />
            <ThemeToggle />
            <button
              onClick={toggleVisibility}
              aria-label="Button to pause star background animation"
              className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#31A8FF88]"
            >
              <StarIcon />
            </button>
            <button
              className="cursor-pointer rounded-md bg-[#31A8FF65] px-4 py-2"
              onClick={downloadResume}
              aria-label="Download Resume"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="rounded-md px-4 py-2 transition-colors duration-300 hover:bg-[#31A8FF88] hover:text-primary"
    >
      {children}
    </Link>
  );
}
