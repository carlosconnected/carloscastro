"use client";

import Link from "next/link";
import { useState } from "react";

type LinkData = { label: string; path: string };

const links: LinkData[] = [
  { label: "Home", path: "/" },
  { label: "Hobbies", path: "/hobbies" },
  { label: "Sudoku", path: "/sudoku" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-14 flex items-center justify-between">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.path}
                href={l.path}
                className="font-semibold hover:text-white/80"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* simple hamburger / X */}
            <span className="sr-only">Open menu</span>
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-6 bg-white transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-6 bg-white transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.path}
                href={l.path}
                className="rounded-md px-3 py-2 font-semibold hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
