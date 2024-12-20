import type { Metadata } from "next";
import { Inter,  Source_Code_Pro, Nunito} from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/Header";

const SCP = Source_Code_Pro({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-source',
  weight: ['200', '300', '400', '500','600'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SCP.className}>
        {children}</body>
    </html>
  );
}
