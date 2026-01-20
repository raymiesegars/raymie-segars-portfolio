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
  title: {
    template: "%s | Raymie Segars",
    default: "Raymie Segars",
  },
  description: "Software and Web Developer, I build things on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StarCanvasProvider>
      <html lang="en" suppressHydrationWarning>
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
