function toGoatLatin(sentence: string): string {
  let result = "";
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  function isVowel(char: string): boolean {
    return vowels.has(char);
  }

  let ex = "a";
  const words = sentence.split(" ");

  for (const word of words) {
    const addon = "ma" + ex;
    const modifiedWord = isVowel(word[0]) ? word : word.substring(1) + word[0];

    result += (result === "" ? "" : " ") + modifiedWord + addon;
    ex += "a";
  }

  return result;
}

console.log("The star of");
