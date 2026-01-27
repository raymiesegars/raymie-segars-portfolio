"use client";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-3 py-5">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Raymie Segars
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <Link href="/social" className="hover:underline">
              Contact
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
