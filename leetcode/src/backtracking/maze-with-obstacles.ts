function printPathWithObstacles(
  str: string,
  maze: any,
  r: number,
  c: number
): void {
  if (r == maze.length - 1 && c == maze[0].length - 1) {
    console.log(str);
    return;
  }
  if (!maze[r][c]) return;

  if (r < maze.length - 1) printPathWithObstacles(str + "D", maze, r + 1, c);
  if (c < maze[0].length - 1) printPathWithObstacles(str + "R", maze, r, c + 1);
}

let board = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];
console.log(printPathWithObstacles("", board, 0, 0));
