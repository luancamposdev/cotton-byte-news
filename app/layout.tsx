import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/footer";

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
      <body className="text-foreground bg-background flex min-h-screen flex-col antialiased [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-transparent dark:[&::-webkit-scrollbar-track]:bg-transparent">
        <Header />

        <main className="mx-auto w-full max-w-7xl flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
