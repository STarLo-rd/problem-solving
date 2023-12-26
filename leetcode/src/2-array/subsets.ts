function subsets(nums: number[]): number[][] {
  let result = [];

  function helper(p: number[], up: number[]) {
    if (up.length == 0) {
      result.push(p);
      return;
    }

    let firstel = up[0];

    helper([...p, firstel], up.slice(1, up.length));

    helper(p, up.slice(1, up.length));
  }
  helper([], nums);

  return result;
}

console.log(subsets([1, 2, 3]));
