function reverseOnlyLetters(s: string): string {
  let arr = s.split("");
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  function isAlpha(char: string): boolean {
    console.log(char, /[a-zA-Z]/.test(char));
    return /[a-zA-Z]/.test(char);
  }

  while (pointer1 < pointer2) {
    while (!isAlpha(arr[pointer1])) pointer1++;
    while (!isAlpha(arr[pointer2])) {
      pointer2--;
    }
    if (pointer1 < pointer2) {
      let temp = arr[pointer1];
      arr[pointer1] = arr[pointer2];
      arr[pointer2] = temp;
      pointer1++;
      pointer2--;
    }
  }
  return arr.join("");
}
console.log(reverseOnlyLetters("6C40E"));
