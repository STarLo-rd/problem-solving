function shiftingLetters(s: string, shifts: number[]): string {
  function shiftChar(char: string, shift: number): string {
    const code = char.charCodeAt(0) + shift;
    return code <= 122
      ? String.fromCharCode(code)
      : String.fromCharCode(((code - 97) % 26) + 97);
  }

  let result = "";
  let cumulativeShift = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    cumulativeShift += shifts[i];
    result = shiftChar(s[i], cumulativeShift) + result;
  }

  return result;
}

console.log(shiftingLetters("abc", [3, 5, 9]));

// console.log(shiftingLetters("z", [52]));

//   function callRec(s: string, num: number, index: number) {
//     console.log(s, num, index);
//     let str = "";
//     for (let j = 0; j < index; j++) {
//       let le = s[j];
//       let code = le.charCodeAt(0) + num;
//       if (code <= 122) {
//         console.log("called under here");
//         str += String.fromCharCode(code);
//       } else {
//         let newCode = ((code - 97) % 26) + 97; // Fix the calculation for newCode        console.log(newCode);
//         console.log(String.fromCharCode(newCode));
//         str += String.fromCharCode(newCode);
//       }
//     }
//     console.log(str + s.substring(index, s.length));
//     return str + s.substring(index, s.length);
//   }

//   for (let i = 0; i < s.length; i++) {
//     s = callRec(s, shifts[i], i + 1);
//   }

//   return s;
