"use client";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/social" className="hover:underline">
              Contact
            </Link>

            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} Raymie Segars
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
