import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Algorave Share",
  description: "Share and discover code and audio from Strudel and TidalCycles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
