import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyBud",
  description: "Find resources & a study buddy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--background)] text-black flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow flex items-center justify-center"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
