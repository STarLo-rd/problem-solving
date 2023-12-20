function diagonal_printPath(str: string, r: number, c: number): void {
  if (r == 1 && c == 1) {
    console.log(str);
    return;
  }
  if (r > 1 && c > 1) diagonal_printPath(str + "D", r - 1, c - 1);
  if (r > 1) diagonal_printPath(str + "V", r - 1, c);
  if (c > 1) diagonal_printPath(str + "H", r, c - 1);
}

diagonal_printPath("", 3, 3);
