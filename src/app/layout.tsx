import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrincipalNavbar from "@/components/navbar/principalNavbar";
import PrincipalFooter from "@/footers/principalFooter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRUEBA MAGICLOG",
  description: "prueba tecnica para magiclog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center`}
        suppressHydrationWarning
      >
        <PrincipalNavbar />
        {children}
        <PrincipalFooter />
      </body>
    </html>
  );
}
