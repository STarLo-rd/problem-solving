function removeTrailingZeros(num: string): string {
  return num.replace(/0+$/, "");
}

console.log(removeTrailingZeros("51230100"));
