import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SSA Engineering Dashboard",
  description:
    "Designed to help engineers at the SSA find the information they need and be more productive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[25 fr 25]">
          <header className="grid-row-1 bg-gray-200 p-4 border-gray-600 border-solid">
            <Link className="hover:text-blue-500" href={"/"}>
              Go back to the Home Page
            </Link>
          </header>
          {children}
          <footer className="grid-row-3 fixed inset-x-0 bottom-0 justify-items-center items-center bg-gray-200 p-4 border-gray-600 border-solid">
            <div>This is a website of the United States Government.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
