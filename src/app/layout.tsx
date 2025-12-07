import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import JsonLd from './components/JsonLd';
import Navbar from "@/components/Navbar";
import { ActiveSectionProvider } from './components/ActiveSectionContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sushant Bhagat | Full Stack Developer & Computer Science Student",
  description: "Portfolio of Sushant Bhagat, a Computer Science student at Delhi University (ARSD College). Full Stack Developer specializing in React, Next.js, and Python. From Lohardaga, currently based in New Delhi.",
  keywords: "Sushant Bhagat, sushant, sushant561, sushantbhagat01, sushant1864, ARSD College, Atma Ram Sanatan Dharma College, Delhi University, Lohardaga, Full Stack Developer, Computer Science, React Developer, Next.js Developer",
  authors: [{ name: "Sushant Bhagat" }],
  creator: "Sushant Bhagat",
  publisher: "Sushant Bhagat",
  robots: "index, follow",
  alternates: {
    canonical: "https://sushantbhagat.vercel.app"
  },
  openGraph: {
    type: "website",
    url: "https://sushantbhagat.vercel.app",
    title: "Sushant Bhagat | Full Stack Developer & CS Student",
    description: "Portfolio of Sushant Bhagat - Computer Science student at Delhi University (ARSD College). Full Stack Developer from Lohardaga, specializing in React and Python development.",
    siteName: "Sushant Bhagat Portfolio",
    images: [
      {
        url: "/images/sushant2.webp",
        width: 800,
        height: 600,
        alt: "Sushant Bhagat - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Sushant1864",
    creator: "@Sushant1864",
    title: "Sushant Bhagat | Full Stack Developer",
    description: "Computer Science student at Delhi University (ARSD College). Full Stack Developer specializing in modern web technologies.",
    // images: ["/images/sushant.jpg"],
    images: ["/images/sushant2.webp"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://sushantbhagat.vercel.app" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Providers>
          <ActiveSectionProvider>
            <JsonLd />
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
