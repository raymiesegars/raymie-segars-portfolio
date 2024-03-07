"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIChatButton";
import { useState } from "react";
import { MenuSquareIcon, XCircleIcon } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4 md:flex">
        <nav className="space-x-4 font-medium">
          <NavLink href="/">home</NavLink>
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/about">about me</NavLink>
          <NavLink href="/social">social media</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <AIChatButton />
          <ThemeToggle />
        </div>
      </div>

      {/* <div className="-mr-2 flex md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="flex flex-col items-center space-y-3 px-2 pb-3 pt-3 sm:px-3">
            <NavLink href="/">home</NavLink>
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/about">about me</NavLink>
            <NavLink href="/social">social media</NavLink>
            <AIChatButton />
            <ThemeToggle />
          </div>
        </div>
      )} */}
    </header>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link legacyBehavior href={href}>
      <a className="rounded-md px-3 py-1 transition-colors duration-300 hover:bg-[#31A8FF88] hover:text-primary">
        {children}
      </a>
    </Link>
  );
}
