// src/app/layout.tsx
import "./globals.css";
import { AppStateProvider } from "../context/AppStateContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sruthi & Mridhul Wedding Invitation",
  description: "Luxury wedding invitation website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="h-full bg-theme-blush">
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  );
}
