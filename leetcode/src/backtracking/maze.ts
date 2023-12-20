function countPath(r: number, c: number): number {
  if (r == 1 || c == 1) return 1;

  let left = countPath(r, c - 1);
  let right = countPath(r - 1, c);
  return left + right;
}

console.log(countPath(3, 9));
