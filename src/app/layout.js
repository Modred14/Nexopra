// File: src/app/layout.js
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Nexopra — Your Personal Opportunity Radar",
  description: "Nexopra is an AI-powered WhatsApp bot that automatically finds tech jobs, internships, hackathons, and career programs tailored to your skills — delivered to your WhatsApp every day.",
  keywords: ["tech jobs", "internships", "hackathons", "WhatsApp bot", "career opportunities", "remote jobs", "developer tools", "AI job finder"],
  metadataBase: new URL("https://nexopra.modred.dev"),
  openGraph: {
    title: "Nexopra — Your Personal Opportunity Radar",
    description: "Stop searching. Let Nexopra find jobs, internships, and hackathons for you — delivered to WhatsApp daily.",
    url: "https://nexopra.modred.dev",
    siteName: "Nexopra",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Nexopra — AI-Powered Opportunity Bot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexopra — Your Personal Opportunity Radar",
    description: "Stop searching. Let Nexopra find jobs, internships, and hackathons for you — delivered to WhatsApp daily.",
    images: ["/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}