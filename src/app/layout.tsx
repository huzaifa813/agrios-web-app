import type { Metadata } from "next";
import {Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700','800'], // Specify the weights you need
  variable: '--font-manrope' // Define a CSS variable
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
