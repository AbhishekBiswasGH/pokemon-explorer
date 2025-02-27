// next config
export const experimental_ppr = true;

// fonts
import { geist } from "@/fonts/geist";

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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
