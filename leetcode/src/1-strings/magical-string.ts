function magicalString(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 1;
  const magicalString = [1, 2, 2];
  let index = 2;

  while (magicalString.length < n) {
    let value = 3 - magicalString[magicalString.length - 1];
    let count = magicalString[index++];
    for (let i = 0; i < count; i++) {
      magicalString.push(value);
    }
  }

  return magicalString.slice(0, n).reduce((a, b) => (b === 1 ? a + 1 : a), 0);
}

console.log(magicalString(6));

// const val = [1, 1, 0, 0];
// console.log(val.reduce((a, b) => (b === 1 ? a + 1 : a), 0));
