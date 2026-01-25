import {
  generateSudoku,
  isSudokuSolved,
  solveSudoku,
} from "./sudoku";

describe("generateSudoku", () => {
  it("returns a 9x9 grid", () => {
    const board = generateSudoku();
    expect(board).toHaveLength(9);
    expect(board.every((row) => row.length === 9)).toBe(true);
  });

  it("contains only numbers 0–9", () => {
    const board = generateSudoku();
    for (const row of board) {
      for (const cell of row) {
        expect(cell).toBeGreaterThanOrEqual(0);
        expect(cell).toBeLessThanOrEqual(9);
      }
    }
  });

  it("has exactly 40 empty cells (zeros)", () => {
    const board = generateSudoku();
    const zeros = board.flat().filter((n) => n === 0).length;
    expect(zeros).toBe(40);
  });

  it("has no duplicate in rows, columns, or 3x3 subgrids", () => {
    const board = generateSudoku();
    expect(isSudokuSolved).toBeDefined();
    // Generate creates a puzzle with gaps; we verify it's solvable and solution is valid
    const copy = board.map((r) => [...r]);
    const solved = solveSudoku(copy);
    expect(solved).toBe(true);
    expect(isSudokuSolved(copy)).toBe(true);
  });

  it("produces a different board on each call (stochastic)", () => {
    const a = generateSudoku();
    const b = generateSudoku();
    const same = a.every((row, i) =>
      row.every((cell, j) => cell === b[i][j])
    );
    expect(same).toBe(false);
  });
});

describe("solveSudoku", () => {
  it("solves a valid solvable puzzle", () => {
    // Minimal known solvable puzzle
    const board = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];
    const copy = board.map((r) => [...r]);
    const result = solveSudoku(copy);
    expect(result).toBe(true);
    expect(isSudokuSolved(copy)).toBe(true);
    expect(copy.flat().every((n) => n >= 1 && n <= 9)).toBe(true);
  });

  it("returns false for an unsolvable puzzle", () => {
    const board = [
      [5, 3, 5, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];
    const copy = board.map((r) => [...r]);
    const result = solveSudoku(copy);
    expect(result).toBe(false);
  });

  it("mutates the board in place when solving", () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const result = solveSudoku(board);
    expect(result).toBe(true);
    expect(board.flat().every((n) => n >= 1 && n <= 9)).toBe(true);
  });
});

describe("isSudokuSolved", () => {
  it("returns true for a valid complete board", () => {
    const solved = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    expect(isSudokuSolved(solved)).toBe(true);
  });

  it("returns false when a row has duplicates", () => {
    const board = [
      [5, 5, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    expect(isSudokuSolved(board)).toBe(false);
  });

  it("returns false when a column has duplicates", () => {
    const board = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [5, 4, 3, 2, 8, 6, 1, 7, 9],
    ];
    expect(isSudokuSolved(board)).toBe(false);
  });

  it("returns false when a 3x3 subgrid has duplicates", () => {
    const board = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 5, 3, 4, 2, 8, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    expect(isSudokuSolved(board)).toBe(false);
  });

  it("returns false when the board contains zeros", () => {
    const board = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 0],
    ];
    expect(isSudokuSolved(board)).toBe(false);
  });
});
