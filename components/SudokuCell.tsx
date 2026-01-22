"use client";

import React from "react";

interface SudokuCellProps {
  value: number;
  editable: boolean;
  solved: boolean;
  thickBorderSides: boolean[]; // [top, right, bottom, left]
  onChange: (value: number) => void;
}

export default function SudokuCell({
  value,
  onChange,
  thickBorderSides,
  editable,
  solved,
}: SudokuCellProps) {
  const borderTop = thickBorderSides[0] ? "border-t-4" : "border-t";
  const borderRight = thickBorderSides[1] ? "border-r-4" : "border-r";
  const borderBottom = thickBorderSides[2] ? "border-b-4" : "border-b";
  const borderLeft = thickBorderSides[3] ? "border-l-4" : "border-l";

  return (
    <div
      className={[
        "h-10 w-10 bg-white border-neutral-300 flex items-center justify-center",
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
      ].join(" ")}
    >
      {!editable ? (
        <span className="font-extrabold text-neutral-900">{value}</span>
      ) : (
        <input
          type="text"
          inputMode="numeric"
          pattern="[1-9]"
          className="h-full w-full text-center outline-none border-0 bg-transparent text-neutral-900"
          value={value > 0 ? String(value) : ""}
          disabled={solved}
          onChange={(e) => {
            const raw = e.target.value;
            const digit = raw.replace(/\D/g, "").slice(0, 1); // keep only one digit

            // allow blank (clears cell)
            if (!digit) return onChange(0);

            const n = Number(digit);

            // only 1..9
            if (n >= 1 && n <= 9) onChange(n);
            else onChange(0);
          }}
          onKeyDown={(e) => {
            // optional: block minus, plus, e, etc (helps on some keyboards)
            if (["-", "+", "e", "E", "."].includes(e.key)) e.preventDefault();
          }}
        />
      )}
    </div>
  );
}
