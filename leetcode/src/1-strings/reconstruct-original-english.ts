function originalDigits(s: string): string {
  let res = "";

  res += "0".repeat(s.split("z").length - 1);
  res += "1".repeat(
    s.split("o").length -
      1 -
      (s.split("z").length - 1) -
      (s.split("w").length - 1) -
      (s.split("u").length - 1)
  );
  res += "2".repeat(s.split("w").length - 1);
  res += "3".repeat(s.split("h").length - 1 - (s.split("g").length - 1));
  res += "4".repeat(s.split("u").length - 1);
  res += "5".repeat(s.split("f").length - 1 - (s.split("u").length - 1));
  res += "6".repeat(s.split("x").length - 1);
  res += "7".repeat(s.split("s").length - 1 - (s.split("x").length - 1));
  res += "8".repeat(s.split("g").length - 1);
  res += "9".repeat(
    s.split("i").length -
      1 -
      (s.split("x").length - 1) -
      (s.split("g").length - 1) -
      (s.split("f").length - 1) +
      (s.split("u").length - 1)
  );

  return res;
}

console.log(originalDigits("owoztneoer"));
console.log(originalDigits("fviefuro"));

// function removeNumbersFromEng(str: string, numberInWord: string): string {
//   for (let i = 0; i < numberInWord.length; i++) {
//     let removalE = str.indexOf(numberInWord[i]);
//     str = str.substring(0, removalE) + str.substring(removalE + 1);
//   }
//   return str;
// }

// function originalDigits(s: string): string {
//   let visited = new Array(s.length).fill(false);
//   console.log(visited);
//   let values = [
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//     "ten",
//   ];

//   let result = [];

//   while (
//     s.includes("z") ||
//     s.includes("w") ||
//     s.includes("u") ||
//     s.includes("x") ||
//     s.includes("g")
//   ) {
//     if (s.includes("z")) {
//       result.push("0");
//       s = removeNumbersFromEng(s, "zero");
//     } else if (s.includes("w")) {
//       result.push("2");
//       s = removeNumbersFromEng(s, "two");
//     } else if (s.includes("u")) {
//       result.push("4");
//       s = removeNumbersFromEng(s, "four");
//     } else if (s.includes("x")) {
//       result.push("6");
//       s = removeNumbersFromEng(s, "six");
//     } else if (s.includes("g")) {
//       result.push("8");
//       s = removeNumbersFromEng(s, "eight");
//     }
//     console.log(s);
//   }

//   while (s.includes("o") && s.includes("n") && s.includes("e")) {
//     result.push("1");
//     s = removeNumbersFromEng(s, "one");
//   }

//   while (
//     s.includes("t") &&
//     s.includes("h") &&
//     s.includes("r") &&
//     s.includes("e") &&
//     s.includes("e")
//   ) {
//     result.push("3");
//     s = removeNumbersFromEng(s, "three");
//   }

//   while (
//     s.includes("f") &&
//     s.includes("i") &&
//     s.includes("v") &&
//     s.includes("e")
//   ) {
//     result.push("5");
//     s = removeNumbersFromEng(s, "five");
//   }
//   while (
//     s.includes("s") &&
//     s.includes("e") &&
//     s.includes("v") &&
//     s.includes("e") &&
//     s.includes("n")
//   ) {
//     result.push("7");
//     s = removeNumbersFromEng(s, "seven");
//   }
//   while (
//     s.includes("n") &&
//     s.includes("i") &&
//     s.includes("n") &&
//     s.includes("e")
//   ) {
//     result.push("9");
//     s = removeNumbersFromEng(s, "nine");
//   }

//   console.log(result);

//   return result.sort().join("");
// }

// console.log(originalDigits("otwothneree"));
