function diagonalSum(mat: number[][]): number {
  let result = 0;

  for (let i = 0; i < mat.length; i++) {
    result += mat[i][i];
    if (i !== mat[i].length - 1 - i) result += mat[i][mat[i].length - 1 - i];
  }

  return result;
}

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
