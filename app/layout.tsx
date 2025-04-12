import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "47Labs",
  description: "Join the future of AI-Powered Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-primary`}
      >
        {children}
        <div className="text-white fixed flex space-x-4 bottom-0 right-0 pb-2 pt-4 justify-center text-xs items-center w-full mx-auto px-4 z-20 bg-gradient-to-t from-black/90 from-30% to-transparent">
          <a
            href="about"
            className="text-primary hover:text-white/100"
          >
            About 47Labs
          </a>
          <a
            href="team"
            className="text-primary hover:text-white/100"
          >
            The Team
          </a>
          <a
            href="https://discord.gg/bb3XTpjcR3"
            target="_blank"
            className="text-primary hover:text-white/100"
          >
            Join the Community
          </a>
          <a
            href="https://x.com/fortysevenlabs"
            target="_blank"
            className="text-primary hover:text-white/100"
          >
            Folllow 47Labs on X
          </a>
        </div>
      </body>
    </html>
  );
}
