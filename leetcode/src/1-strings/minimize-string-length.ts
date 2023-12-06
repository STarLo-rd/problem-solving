function minimizedStringLength(s: string): number {
  //   let currentChar = "";
  //   let result = "";

  //   for (let i = 0; i < s.length; i++) {
  //     if (s.charAt(i) !== currentChar) {
  //       currentChar = s.charAt(i);
  //       result += s.charAt(i);
  //     }
  //   }
  //   console.log(result);
  //   return result.length;

  let arr = s.split("");

  return new Set(arr).size;
}

console.log(minimizedStringLength("ipi"));
