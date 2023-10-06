import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

export const metadata: Metadata = {
  title: "Aesop | Formulations for Skin, Hair & Body | Aesop Hong Kong SAR",
  description: "Nexus Assignment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><meta name="darkreader-lock"></meta></head>
      <body className="font-suss leading-[1.7] lead relative min-h-full text-base text-[#333] bg-[#fffef2]">
        <Navbar />
        <main>{children}</main>
        <Quote />
        <Footer />
      </body>
    </html>
  );
}
