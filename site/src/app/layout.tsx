// src/app/layout.tsx
import "./globals.css";
import { AppStateProvider } from "../context/AppStateContext";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sruthi & Mridhul Wedding Invitation",
  description: "You're invited to celebrate our special day! Tap to open the invitation.",
  colorScheme: "light",
  openGraph: {
    title: "Sruthi & Mridhul | Wedding Invitation 💒",
    description: "You're cordially invited to celebrate the union of Sruthi & Mridhul. Tap to open your invitation!",
    siteName: "Sruthi & Mridhul Wedding",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sruthi & Mridhul | Wedding Invitation 💒",
    description: "You're cordially invited to celebrate the union of Sruthi & Mridhul. Tap to open!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full light" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light only" />
      </head>
      <body className="h-full bg-theme-blush">
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  );
}
