function removeDuplicateLetters(s: string): string {
  let arr = s.split(" ");
  let map = new Set(...arr);
  return Array.from(map).join("");
}

console.log(removeDuplicateLetters("bcabc"));
