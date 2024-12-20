import type { Metadata } from "next";
import {Source_Code_Pro} from "next/font/google";
import "../../globals.css";

const SCP = Source_Code_Pro({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-source',
    weight: ['200', '300', '400', '500','600'],
  });

  export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

  export default function ProfileLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={SCP.className}>{children}</body>
      </html>
    );
  }
  