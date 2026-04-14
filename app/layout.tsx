import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Herberth Guimarães | UI/UX Designer",
  description:
    "Product Designer para sistemas complexos, ERP, PDV, fintech e SaaS B2B.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
