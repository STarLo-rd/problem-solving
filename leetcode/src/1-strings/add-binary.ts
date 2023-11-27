function addBinary(a: string, b: string): string {
  while (a.length < b.length) a = "0" + a;

  while (b.length < a.length) b = "0" + b;
  console.log(a, b);
  let total = "";
  let carry = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let num1 = parseInt(a[i]);
    let num2 = parseInt(b[i]);
    let sum = num1 + num2 + carry;
    console.log(sum, total);
    total = (sum % 2) + total;
    carry = Math.floor(sum / 2);
  }
  if (carry > 0) total = carry + total;

  return total;
}

console.log(addBinary("1010", "1011"));
