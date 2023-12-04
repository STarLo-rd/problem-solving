function numberOfLines(widths: number[], s: string): number[] {
  let count = 1;
  let cost = 0;
  const base = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const width = widths[s.charCodeAt(i) - base];
    cost += width;
    if (cost > 100) {
      count++;
      cost = width;
    }
  }
  return [count, cost];
}

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  )
);

console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  )
);

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let totalcost = 0;
// let result = "";
// let count = 1;

// let i = 0;

// while (i < s.length) {
//   let index = alphabet.indexOf(s[i]);
//   let cost = widths[index];
//   console.log(index, cost);
//   if (totalcost + cost <= 100) {
//     totalcost += cost;
//     result += s[i];
//   } else {
//     count++;
//     totalcost = cost;
//     result = s[i];
//   }
//   i++;
// }

// console.log(totalcost, result, count);

// return [count, totalcost];
