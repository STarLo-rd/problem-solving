function uniquePaths(m: number, n: number): number {
  const memo: number[][] = [];
  for (let i = 0; i < m; i++) {
    memo[i] = [];
    for (let j = 0; j < n; j++) memo[i][j] = -1;
  }
  function helperFun(m: number, n: number): number {
    if (memo[m - 1][n - 1] !== -1) return;
    if (m === 1 || n === 1) return 1;

    let left = uniquePaths(m - 1, n);
    let right = uniquePaths(m, n - 1);

    memo[m - 1][n - 1] = 1;
    return left + right;
  }

  return helperFun(m, n);
}

console.log(uniquePaths(3, 7));
