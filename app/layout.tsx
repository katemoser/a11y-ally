import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { RepoProvider } from "./contexts/RepoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A11y Ally",
  description: "A tool to help you audit your GitHub repositories for accessibility concerns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RepoProvider>
          <NavBar />
          {children}
        </RepoProvider>
      </body>
    </html>
  );
}
