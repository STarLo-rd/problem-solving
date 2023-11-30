function reformatNumber(number: string): string {
  const output: string[] = [];
  let cleanedNumber = number.replace(/[-\s]/g, "");
  const length = cleanedNumber.length;
  let i = 0;

  while (i < length) {
    if (i + 4 === length) {
      output.push(cleanedNumber.substring(i, i + 2));
      i += 2;
    } else if (i + 3 <= length) {
      output.push(cleanedNumber.substring(i, i + 3));
      i += 3;
    } else {
      output.push(cleanedNumber.substring(i, i + 2));
      i += 2;
    }
  }

  if (output.length > 1) {
    return output.join("-");
  }

  return output[0];
}

console.log(reformatNumber("12345"));

// let refNum = number.replace(/[^0-9]/g, "");
// let result = "";

// function reform(n: string) {
//   if (n.length <= 3) {
//     result += "-" + n;
//     return;
//   } else if (n.length === 4) {
//     result += "-" + n.substring(0, 2) + "-" + n.substring(2, n.length);
//   } else {
//     let ne = n.substring(0, 3);
//     n = n.substring(3, n.length);
//     console.log("called", n);
//     result += "-" + ne;
//     if (n.length !== 0) reform(n);
//   }
// }

// reform(refNum);

// return result.substring(1, result.length);
