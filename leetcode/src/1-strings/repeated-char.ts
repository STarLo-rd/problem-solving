function repeatedCharacter(s: string): string {
  const firstOccurrence = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (firstOccurrence.has(char)) {
      return char;
    } else {
      firstOccurrence.set(char, i);
    }
  }

  return "";
}

console.log(repeatedCharacter("abccbaacz"));

// let pointer1 = 0;
// let pointer2 = 1;
// while (pointer1 < s.length) {
//   if (s[pointer1] === s[pointer2]) {
//     return s[pointer2];
//   }
//   pointer1++;
//   pointer2++;
// }

// let min = Infinity;
// let result = "";
// for (let i = 0; i < s.length; i++) {
//   if (s.lastIndexOf(s[i]) !== i) {
//     if (min > s.lastIndexOf(s[i]) - i) {
//       min = s.lastIndexOf(s[i]) - i;
//       result = s[i];
//     }
//   }
// }
// return result;
