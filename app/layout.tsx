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
        <div className="fixed bottom-0 left-0 w-full h-8 blur-2xl bg-gradient-to-r from-transparent to-green-500 opacity-40"></div>
        <div className="text-white/50 fixed flex space-x-4 bottom-4 left-1/2 -translate-x-1/2 flex-wrap justify-center text-xs items-center w-full mx-auto max-w-80 lg:max-w-3xl">
          <a
            href="team"
            className="text-white/50 hover:text-white/100"
          >
            The Team
          </a>
          <a
            href="about"
            className="text-white/50 hover:text-white/100"
          >
            About 47Labs
          </a>
          <a
            href="https://discord.gg/bb3XTpjcR3"
            target="_blank"
            className="text-white/50 hover:text-white/100"
          >
            Join the Community
          </a>
          <a
            href="https://x.com/fortysevenlabs"
            target="_blank"
            className="text-white/50 hover:text-white/100"
          >
            Folllow 47Labs on X
          </a>
        </div>
      </body>
    </html>
  );
}
