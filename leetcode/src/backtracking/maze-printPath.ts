function printPath(str: string, r: number, c: number): void {
  if (r == 1 && c == 1) {
    console.log(str);
    return;
  }
  if (r > 1) printPath(str + "D", r - 1, c);
  if (c > 1) printPath(str + "R", r, c - 1);
}

console.log(printPath("", 3, 3));
