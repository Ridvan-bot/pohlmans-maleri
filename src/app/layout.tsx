import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./(site)/components/Navbar";
import Footer from "./(site)/components/Footer";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pohlmans-maleri.example"),
  title: {
    default: "Pohlmans Måleri | Professionella målare i Skåne",
    template: "%s | Pohlmans Måleri",
  },
  description:
    "Pohlmans Måleri erbjuder invändig och utvändig målning, tapetsering och renovering för privatpersoner och företag.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pohlmans Måleri",
    description:
      "Professionella målare för hem och företag. Kvalitet, noggrannhet och service.",
    url: "/",
    siteName: "Pohlmans Måleri",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${manrope.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
