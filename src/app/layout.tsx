import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import { ActiveSectionProvider } from './components/ActiveSectionContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Providers>
          <ActiveSectionProvider>
            <Navbar />
            <main className="container mx-auto px-4 pt-16">
              {children}
            </main>
          </ActiveSectionProvider>
        </Providers>
      </body>
    </html>
  );
}
