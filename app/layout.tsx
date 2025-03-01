// next config
export const experimental_ppr = true;

// fonts
import { geist } from "@/fonts/geist";

// components
import Footer from "@/components/Footer";

// types
import type { Metadata } from "next";

// styles
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokémon Explorer",
  description:
    "Your ultimate Pokémon guide! Explore detailed info for every Pokémon, all in one place."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.sans.variable}`}
    >
      <body className="mx-auto max-w-[1200px] min-w-[360px] font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
