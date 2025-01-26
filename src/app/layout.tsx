import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Lora, Inter, Lato, Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oswald',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});


export const metadata: Metadata = {
  title: "Products Hunt",
  description: "The best place to find the best products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
