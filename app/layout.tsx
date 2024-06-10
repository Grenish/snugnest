import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnugNest",
  description: "SnugNest is a place to find your true cardigan.",
  authors: [{ name: "Grenish Rai" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./SnugNest.png" />
      <body className={mont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
