// src/app/layout.tsx
import "./globals.css";
import { AppStateProvider } from "../context/AppStateContext";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sruthi & Mridhul Wedding Invitation",
  description: "You're invited to celebrate our special day! Tap to open the invitation.",
  colorScheme: "light",
  openGraph: {
    title: "Sruthi & Mridhul | Wedding Invitation",
    description: "You're invited to celebrate our special day! Tap here to open.",
    url: "https://your-vercel-domain.vercel.app", // Fallback (Vercel overrides automatically based on deployment)
    siteName: "Sruthi & Mridhul Wedding",
    images: [
      {
        url: "/assets/images/main_invitation.webp", // You can change this to "/assets/images/envelope.webp" if preferred
        width: 800,
        height: 1000,
        alt: "Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sruthi & Mridhul | Wedding Invitation",
    description: "You're invited to celebrate our special day! Tap here to open.",
    images: ["/assets/images/main_invitation.webp"],
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
