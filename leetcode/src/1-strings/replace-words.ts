function replaceWords(dictionary: string[], sentence: string): string {
  const dict = new Set(dictionary);
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    for (let j = 1; j < words[i].length; j++) {
      if (dict.has(words[i].substring(0, j)))
        words[i] = words[i].substring(0, j);
    }
  }

  return words.join(" ");
}

console.log(
  replaceWords(
    ["catt", "cat", "bat", "rat"],
    "the cattle was rattled by the battery"
  )
);
