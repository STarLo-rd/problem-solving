function maxProduct(words: string[]): number {
  words.sort((a, b) => b.length - a.length);

  console.log("words", words);

  // function hasCommonLetters(word1: string, word2: string): boolean {
  // for (let char of word1) {
  //   if (word2.includes(char)) {
  //     return true;
  //   }
  // }
  // return false;
  // }

  const convertToInt = (str) => {
    let int = 0;
    const baseCharCode = "a".charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
      int |= 1 << (str.charCodeAt(i) - baseCharCode);
    }
    // console.log(int);
    return int;
  };
  let maxProduct = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((convertToInt(words[i]) & convertToInt(words[j])) === 0) {
        maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
        break;
      }
    }
  }

  return maxProduct;
}

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
