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
  title: "Spájkovanie hliníka Bratislava - Autochladiče servis | Spájkovanie hliníka",
  description: "Profesionálne spájkovanie hliníka a oprava autochladičov v Bratislave. Spájkovanie hliníka, autochladiče servis s 15+ rokmi praxe. Kvalitné služby spájkovania hliníka Bratislava.",
  keywords: "spájkovanie hliníka Bratislava, spájkovanie hliníka, autochladiče Bratislava, autochladiče servis, spájkovanie hliníka, oprava autochladičov Bratislava",
  openGraph: {
    title: "Spájkovanie hliníka Bratislava - Autochladiče servis | Spájkovanie hliníka",
    description: "Profesionálne spájkovanie hliníka a oprava autochladičov v Bratislave. Spájkovanie hliníka, autochladiče servis s 15+ rokmi praxe.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
