import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/components/layout/AppWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOREVA | Montres de Luxe de Seconde Main",
  description:
    "HOREVA - Expert en achat, revente, réparation et estimation de montres de luxe de seconde main. Partout en France.",
  keywords: [
    "montres de luxe",
    "seconde main",
    "Rolex",
    "Omega",
    "réparation montre",
    "estimation montre",
    "France",
  ],
  authors: [{ name: "HOREVA" }],
  openGraph: {
    title: "HOREVA | Montres de Luxe de Seconde Main",
    description:
      "Expert en achat, revente, réparation et estimation de montres de luxe.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="font-body">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
