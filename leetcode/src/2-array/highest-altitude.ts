function largestAltitude(gain: number[]): number {
  let max = 0;
  let count = 0;
  for (let i = 0; i < gain.length; i++) {
    count = count + gain[i];
    if (count > max) max = count;
  }
  return max;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
