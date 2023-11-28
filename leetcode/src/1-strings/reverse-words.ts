function reverseWords(s: string): string {
  let splittedWords = s.split(" ");
  let arr = [];
  for (let i = splittedWords.length - 1; i >= 0; i--) {
    if (splittedWords[i] !== "") {
      arr.push(splittedWords[i]);
    }
  }

  return arr.join(" ");
}

console.log(reverseWords("the sky is   blue"));
