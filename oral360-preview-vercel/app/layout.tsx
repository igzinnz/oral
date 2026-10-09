import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const manrope = localFont({
  src: [
    { path: "../public/fonts/manrope-latin-400-normal.woff2", weight: "400" },
    { path: "../public/fonts/manrope-latin-500-normal.woff2", weight: "500" },
    { path: "../public/fonts/manrope-latin-600-normal.woff2", weight: "600" },
    { path: "../public/fonts/manrope-latin-700-normal.woff2", weight: "700" },
    { path: "../public/fonts/manrope-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-manrope",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Oral 360 | Sorrisos com saúde o tempo todo — Prévia",
  description:
    "Conheça a proposta de site da Oral 360. Atendimento odontológico humanizado, de segunda a sábado, na Tijuca, em Copacabana e em Nova Iguaçu.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Oral 360 — Cuidado em cada detalhe",
    description:
      "Sorrisos com saúde o tempo todo. Conheça a prévia institucional da Oral 360.",
    locale: "pt_BR",
    type: "website",
    siteName: "Oral 360 — Prévia comercial",
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={manrope.variable}>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
