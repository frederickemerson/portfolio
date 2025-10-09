
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css"

export const metadata: Metadata = {
  title: "Frederick Amal Emerson - Computer Engineering @ NUS",
  description:
    "Computer Engineering student at NUS specializing in AI, web development, and systems programming. NUS Science & Technology Scholar.",
  icons: [{ rel: "icon", url: "/portfolio.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
