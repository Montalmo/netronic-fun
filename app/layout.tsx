import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lasertag Netronic Fun — Schlüsselfertige Lasertag-Lösungen",
  description: "Wir bauen Ihnen ein profitables Lasertag-Business — von der Planung über die Lieferung bis zum laufenden Support. Magdeburg, Deutschland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}