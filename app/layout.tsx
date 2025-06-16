import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPM Cinemas",
  description:
    "OPM Cinemas, established by filmmaker Aashiq Abu in 2012, is a production company engaged in films, television, and advertising. The company produces content across various genres, focusing on authentic storytelling that reflects local culture while appealing to wider audiences. Under its banner, OPM Dream Mill Cinemas serves as a platform to mentor, support, and promote emerging talent in the field of filmmaking, ensuring the development of new voices in cinema.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/LOGO.svg" sizes="any" />
      <body className={`${inter.className} bg-[#222831] `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
