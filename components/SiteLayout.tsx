import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-black starfield">
      <Navbar />

      <main className="flex-1 flex items-start justify-center px-4 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
