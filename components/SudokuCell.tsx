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
          pattern="[0-9]*"
          className="h-full w-full text-center outline-none border-0 bg-transparent text-neutral-900"
          value={value > 0 ? String(value) : ""}
          disabled={solved}
          onChange={(e) => {
            const next = e.target.value.replace(/\D/g, "").slice(0, 1);
            onChange(next ? Number(next) : 0);
          }}
        />
      )}
    </div>
  );
}
