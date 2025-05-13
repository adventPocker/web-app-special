import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPM Cinemas - Where Every FrameTells a Story",
  description:
    "Welcome to OPM Cinemas, a creative powerhouse shaping the future of storytelling under the leadership of filmmaker Aashiq Abu since its inception in October 2012. We collaborate with visionary artists, writers, and technicians to bring authentic narratives to life. Our projects are rooted in culture, yet global in appeal, making a lasting impression on audiences.",
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
