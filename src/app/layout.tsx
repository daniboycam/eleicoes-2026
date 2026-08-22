import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eleições 2026 — Plataforma de Propostas",
  description:
    "Compare as propostas de governo dos principais candidatos à Presidência e ao Governo em 2026, baseadas nos planos registrados no TSE.",
  openGraph: {
    title: "Eleições 2026 — Plataforma de Propostas",
    description: "Compare as propostas de governo dos principais candidatos à Presidência e ao Governo em 2026.",
    url: "https://eleicoes-2026.vercel.app", // Adjust if domain is different
    siteName: "Eleições 2026",
    images: [
      {
        url: "/logo.png", // We will use the logo for now, or a specific banner
        width: 1200,
        height: 630,
        alt: "Eleições 2026",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleições 2026 — Plataforma de Propostas",
    description: "Compare as propostas de governo dos principais candidatos à Presidência e ao Governo em 2026.",
    images: ["/logo.png"],
  },
};

import { ThemeProvider } from "../components/theme-provider";
import { GlobalChat } from "@/components/global-chat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased dark:bg-slate-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <GlobalChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
