import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
  title: {
    default: "Cotton Byte News",
    template: "%s | Cotton Byte News",
  },
  description:
    "Cotton Byte News é um blog atualizado com as últimas notícias, tendências e novidades sobre tecnologia, desenvolvimento web, frameworks modernos como NestJS, React e ferramentas como TailwindCSS.",
  keywords: [
    "Cotton Byte News",
    "Notícias de Tecnologia",
    "Tecnologia",
    "NestJS",
    "React",
    "TailwindCSS",
    "TypeScript",
    "Desenvolvimento Web",
    "Next.js",
    "Inovação",
    "Frameworks Modernos",
    "Software",
    "Startups",
    "Clean Architecture",
    "Node.js",
  ],
  authors: [{ name: "Luan Campos", url: "https://github.com/luancamposdev" }],
  creator: "Luan Campos",
  openGraph: {
    title: "Cotton Byte News",
    description:
      "Fique por dentro das últimas notícias de tecnologia e desenvolvimento moderno com NestJS, React, TailwindCSS, startups e muito mais.",
    type: "website",
    locale: "pt_BR",
    url: "https://seuprojeto.com", // Substitua pelo domínio real
    siteName: "Cotton Byte News",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="text-foreground bg-background flex min-h-screen flex-col antialiased">
        <Header />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 pt-32 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
