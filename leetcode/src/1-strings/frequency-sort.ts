function frequencySort(s: string): string {
  const freq: { [key: string]: number } = {};
  const bucket: string[] = new Array(s.length + 1).fill("");

  let res = "";

  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }

  console.log(freq);
  console.log(bucket);

  for (const [char, count] of Object.entries(freq)) {
    bucket[count] += char.repeat(count);
  }


  for (let i = s.length; i > 0; i--) {
    if (bucket[i].length > 0) {
      res += bucket[i];
    }
  }

  return res;
}

console.log(frequencySort("tree"));

// function frequencySort(s: string): string {
//   let obj: { [key: string]: number } = {};

//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]]) {
//       obj[s[i]] = obj[s[i]] + 1;
//     } else {
//       obj[s[i]] = 1;
//     }
//   }

//   const keyValueArray = Object.entries(obj);

//   keyValueArray.sort((a, b) =>
//     b[1] - a[1] !== 0 ? b[1] - a[1] : a[0].localeCompare(b[0])
//   );

//   let str = "";

//   for (let i = 0; i < keyValueArray.length; i++) {
//     let val = keyValueArray[i];
//     str += val[0].repeat(Number(val[1]));
//   }

//   return str;
// }

// console.log(frequencySort("tree"));
