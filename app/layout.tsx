import type { Metadata } from "next";
import {  Poppins} from "next/font/google";
import "./globals.css";

import Header from "@/components/_ui/header/index";
import Footer from "@/components/_ui/footer/index";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400','500', '600', '700']
});

export const metadata: Metadata = {
  title: "Ecobazar",
  description: "Ecobazar eco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
