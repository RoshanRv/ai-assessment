import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toast";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-CADEMY",
  description: "AI Powered Assessment Revolutionizing Skill Mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toast />
      </body>
    </html>
  );
}
