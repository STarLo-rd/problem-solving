function finalString(s: string): string {
  let result = "";
  let reverseFlag = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      reverseFlag = !reverseFlag;
    } else {
      result = reverseFlag ? s[i] + result : result + s[i];
    }
  }

  return reverseFlag ? result.split("").reverse().join("") : result;
}

console.log(finalString("string"));
// console.log(finalString("pointer"))

//   let str = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "i") str = str.split("").reverse().join("");
//     else str += s[i];
//   }

//   return str;
