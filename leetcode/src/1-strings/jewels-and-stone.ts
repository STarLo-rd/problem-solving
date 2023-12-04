function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;

  for (let i of stones) {
    if (jewels.indexOf(i) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
