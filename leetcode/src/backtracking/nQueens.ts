function nQueens(board: boolean[][], row: number): number {
  if (row === board.length) {
    displayBoard(board);
    return 1;
  }

  let count = 0;

  for (let col = 0; col < board.length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = true;
      count += nQueens(board, row + 1);
      board[row][col] = false;
    }
  }
  return count;
}

function isSafe(board: boolean[][], row: number, col: number): boolean {
  //check vertical
  for (let i = 0; i < row; i++) {
    if (board[i][col]) return false;
  }

  // check left diagonal
  let maxLeft = Math.min(row, col);
  for (let i = 1; i <= maxLeft; i++) {
    if (board[row - i][col - i]) return false;
  }

  // check right diagonal
  let maxRight = Math.min(row, board.length - col - 1);
  for (let i = 1; i <= maxRight; i++) {
    if (board[row - i][col + i]) return false;
  }
  return true;
}

function makeNQueenCall(row: number) {
  let board: boolean[][] = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < row; j++) {
      board[i][j] = false;
    }
  }

  console.log(nQueens(board, 0));
}

function displayBoard(board: boolean[][]) {
  for (let i = 0; i < board.length; i++) {
    let rowString = "";
    for (let j = 0; j < board[i].length; j++) {
      rowString += board[i][j] + " ";
    }
    console.log(rowString);
  }
  console.log("");
}

makeNQueenCall(4);
