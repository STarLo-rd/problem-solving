function reverseVowels(s: string): string {
  let pointer1 = 0;
  let pointer2 = s.length - 1;
  let vowel = "aeiouAEIOU".split("");
  let arr = s.split("");

  function isVowel(v: string): boolean {
    return vowel.includes(v);
  }

  while (pointer1 < pointer2) {
    if (!isVowel(arr[pointer1])) pointer1++;
    if (!isVowel(arr[pointer2])) pointer2--;
    if (isVowel(arr[pointer1]) && isVowel(arr[pointer2])) {
      let temp = arr[pointer1];
      arr[pointer1] = arr[pointer2];
      arr[pointer2] = temp;
      pointer1++;
      pointer2--;
    }
  }

  return arr.join("");
}

console.log(reverseVowels("hello"));
