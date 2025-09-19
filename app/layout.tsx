import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "AI Meal Plans | Simple SaaS Demo",
  description: "Generate personalized meal plans with OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className="bg-gray-50 text-gray-900"
        >
          <NavBar />
          <div className="max-w-7xl mx-auto pt-16 p-4 min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
