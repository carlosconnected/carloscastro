import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Mono } from "next/font/google";
import SiteLayout from "@/components/SiteLayout";

const noto = Noto_Sans_Mono({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Carlos Castro",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
