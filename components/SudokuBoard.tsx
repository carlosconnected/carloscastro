"use client";

import React, { useMemo, useState } from "react";
import { generateSudoku, isSudokuSolved } from "../lib/sudoku";
import SudokuCell from "./SudokuCell";

type GameState = {
  board: number[][];
  originalBoard: number[][];
};

function loadInitialGame(): GameState {
  // Runs on client (this is a "use client" file)
  const saved = localStorage.getItem("sudoku");
  const savedOriginal = localStorage.getItem("originalSudoku");

  if (saved && savedOriginal) {
    return {
      board: JSON.parse(saved),
      originalBoard: JSON.parse(savedOriginal),
    };
  }

  const original = generateSudoku();
  localStorage.setItem("originalSudoku", JSON.stringify(original));
  localStorage.setItem("sudoku", JSON.stringify(original));

  return {
    board: original.map((r) => [...r]),
    originalBoard: original,
  };
}

export default function SudokuBoard() {
  const [{ board, originalBoard }, setGame] = useState<GameState>(() =>
    loadInitialGame(),
  );

  const [open, setOpen] = useState(false);
  const [solved, setSolved] = useState(false);

  const isFull = useMemo(
    () => board.length > 0 && board.every((r) => r.every((c) => c !== 0)),
    [board],
  );

  const isEmpty = useMemo(() => {
    if (!board.length || !originalBoard.length) return true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== originalBoard[i][j]) return false;
      }
    }
    return true;
  }, [board, originalBoard]);

  const initSudoku = () => {
    const original = generateSudoku();
    localStorage.setItem("originalSudoku", JSON.stringify(original));
    localStorage.setItem("sudoku", JSON.stringify(original));

    setSolved(false);
    setGame({
      board: original.map((r) => [...r]),
      originalBoard: original,
    });
  };

  const restartSudoku = () => {
    const savedOriginal = localStorage.getItem("originalSudoku");
    if (!savedOriginal) return;

    const original = JSON.parse(savedOriginal) as number[][];
    localStorage.setItem("sudoku", JSON.stringify(original));

    setSolved(false);
    setGame({
      board: original.map((r) => [...r]),
      originalBoard: original,
    });
  };

  const handleCellChange = (row: number, col: number, value: number) => {
    if (value < 0 || value > 9) return;

    setGame((prev) => {
      const nextBoard = prev.board.map((r) => [...r]);
      nextBoard[row][col] = value;
      localStorage.setItem("sudoku", JSON.stringify(nextBoard));
      return { ...prev, board: nextBoard };
    });
  };

  const checkSolved = () => {
    const sudokuSolved = isSudokuSolved(board);
    setSolved(sudokuSolved);
    setOpen(true);
  };

  return (
    <>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close modal overlay"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-[92vw] max-w-md rounded-xl bg-white shadow-2xl">
            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                Puzzle Solution Check
              </h2>
            </div>

            <div className="px-6 py-5 text-neutral-800">
              {solved ? (
                <p>You have solved the puzzle.</p>
              ) : (
                <p>The puzzle is not solved yet. Keep trying!</p>
              )}
            </div>

            <div className="flex justify-end border-t px-6 py-4">
              <button
                className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Board + controls */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-fit">
          <div className="grid grid-cols-9 border-2 border-neutral-300 bg-white">
            {board.map((row, rowIndex) =>
              row.map((cellValue, colIndex) => (
                <SudokuCell
                  key={`${rowIndex}-${colIndex}`}
                  solved={solved}
                  value={cellValue}
                  onChange={(value) =>
                    handleCellChange(rowIndex, colIndex, value)
                  }
                  editable={originalBoard[rowIndex]?.[colIndex] === 0}
                  thickBorderSides={[
                    rowIndex === 0 || rowIndex === 3 || rowIndex === 6,
                    colIndex === 8,
                    rowIndex === 8,
                    colIndex === 0 || colIndex === 3 || colIndex === 6,
                  ]}
                />
              )),
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={restartSudoku}
            disabled={isEmpty}
            className={[
              "rounded-md px-4 py-2 text-sm font-semibold text-white",
              isEmpty
                ? "bg-neutral-900 opacity-50 cursor-not-allowed"
                : "bg-neutral-900 hover:bg-neutral-700",
            ].join(" ")}
          >
            Restart
          </button>

          <button
            onClick={initSudoku}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700"
          >
            New Game
          </button>

          <button
            onClick={checkSolved}
            disabled={solved || !isFull}
            className={[
              "rounded-md px-4 py-2 text-sm font-semibold text-white",
              solved || !isFull
                ? "bg-neutral-900 opacity-50 cursor-not-allowed"
                : "bg-neutral-900 hover:bg-neutral-700",
            ].join(" ")}
          >
            Check Solution
          </button>
        </div>
      </div>
    </>
  );
}
