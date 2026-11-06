import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xtremexperts.co.uk"),

  title: {
    default: "Xtreme Xperts | Expert Device Repair Services",
    template: "%s | Xtreme Xperts",
  },

  description:
    "Looking for reliable device repairs? Xtreme Xperts offers professional mobile phone, laptop, tablet, Xbox and PlayStation repair services in the UK.",

  applicationName: "Xtreme Xperts",

  keywords: [
    "Xtreme Xperts",
    "Mobile Phone Repair",
    "Laptop Repair",
    "Tablet Repair",
    "Xbox Repair",
    "PlayStation Repair",
    "Gaming Console Repair",
    "Device Repair UK",
  ],

  openGraph: {
    title: "Xtreme Xperts | Expert Device Repair Services",
    description:
      "Professional repair services for mobile phones, laptops, tablets and gaming consoles.",
    url: "https://xtremexperts.co.uk",
    siteName: "Xtreme Xperts",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xtreme Xperts | Expert Device Repair Services",
    description:
      "Professional mobile, laptop, tablet and gaming console repair services in the UK.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
