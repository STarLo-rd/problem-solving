function differenceOfSums(n: number, m: number): number {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m == 0) count -= i;
    else count += i;
  }
  return count;
}

console.log(differenceOfSums(10, 3));
