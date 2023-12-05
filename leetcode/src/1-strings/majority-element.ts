function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;

      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }
    }
  }

  return candidate;
}

console.log(majorityElement([1, 2, 2, 2, 7, 7, 7, 7, 7, 7]));
