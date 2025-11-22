import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Victor Hugo - Guia Certificado da Paraíba",
  description:
    "Explore a Paraíba com experiências exclusivas. Roteiros completos, atendimento premium e a verdadeira essência da Paraíba.",
  generator: "v0.app",
  keywords: [
    "guia turístico",
    "Paraíba",
    "João Pessoa",
    "Coqueirinho",
    "Tambaba",
    "Areia Vermelha",
    "turismo",
  ],
  icons: {
    icon: [
      {
        url: "/turismo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/turismo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/turismo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
