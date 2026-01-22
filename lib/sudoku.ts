export function generateSudoku(): number[][] {
  const board: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));

  // Fill in the main diagonal subgrids
  for (let i = 0; i < 9; i += 3) {
    fillSubgrid(board, i, i);
  }

  // Solve the puzzle
  solveSudoku(board);

  // Remove numbers to create a puzzle
  removeNumbers(board, 40); // You can adjust the number of empty cells as desired

  return board;
}

function fillSubgrid(board: number[][], row: number, col: number): void {
  const nums = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let numIndex = 0;

  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      board[i][j] = nums[numIndex];
      numIndex++;
    }
  }
}

function shuffleArray(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function solveSudoku(board: number[][]): boolean {
  const emptyCell = findEmptyCell(board);

  if (!emptyCell) {
    return true; // Puzzle solved
  }

  const [row, col] = emptyCell;

  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;

      if (solveSudoku(board)) {
        return true;
      }

      board[row][col] = 0; // Backtrack
    }
  }

  return false; // No solution found
}

function findEmptyCell(board: number[][]): [number, number] | null {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null; // No empty cell found
}

function isValid(
  board: number[][],
  row: number,
  col: number,
  num: number,
): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false; // Number exists in row or column
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false; // Number exists in 3x3 subgrid
      }
    }
  }

  return true; // Number is valid in this position
}

function removeNumbers(board: number[][], count: number): void {
  let cellsToRemove = count;

  while (cellsToRemove > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    if (board[row][col] !== 0) {
      const temp = board[row][col];
      board[row][col] = 0;

      const tempBoard = [...board.map((row) => [...row])];

      if (hasUniqueSolution(tempBoard)) {
        cellsToRemove--;
      } else {
        board[row][col] = temp;
      }
    }
  }
}

function hasUniqueSolution(board: number[][]): boolean {
  const tempBoard = [...board.map((row) => [...row])];
  return solveSudoku(tempBoard);
}

export function isSudokuSolved(board: number[][]): boolean {
  const N = board.length;

  // Check rows and columns
  for (let i = 0; i < N; i++) {
    const rowSet = new Set();
    const colSet = new Set();

    for (let j = 0; j < N; j++) {
      if (rowSet.has(board[i][j]) || colSet.has(board[j][i])) {
        return false;
      }
      if (board[i][j] !== 0) rowSet.add(board[i][j]);
      if (board[j][i] !== 0) colSet.add(board[j][i]);
    }
  }

  // Check 3x3 subgrids
  for (let i = 0; i < N; i += 3) {
    for (let j = 0; j < N; j += 3) {
      const subgridSet = new Set();

      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          if (subgridSet.has(board[x][y])) {
            return false;
          }
          if (board[x][y] !== 0) subgridSet.add(board[x][y]);
        }
      }
    }
  }

  return true;
}
