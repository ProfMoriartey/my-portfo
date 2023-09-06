import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Alhusaini | Front End Developer",
  description:
    "Ahmed Alhusaini is a Front End Developer who likes to help create new and interesting websites as well as learning about new things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
