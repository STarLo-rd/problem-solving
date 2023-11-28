function letterCombinations(digits: string): string[] {
  let obj = new Map<number, string>([
    [2, "abc"],
    [3, "def"],
    [4, "ghi"],
    [5, "jkl"],
    [6, "mno"],
    [7, "pqrs"],
    [8, "tuv"],
    [9, "wxyz"],
  ]);

  let digitOfArr: number[] = digits.split("").map(Number);
  let possibleWords: string[] = digitOfArr.map((digit) => obj.get(digit) || "");

  let result = [];
  function recursiveComb(letter: string, arr: string[]) {
    if (arr.length === 0) return;
    if (arr.length === 1) {
      let word = arr[0];
      for (let i = 0; i < word.length; i++) result.push(letter + word[i]);
      return;
    }

    let word = arr[0];
    for (let i = 0; i < word.length; i++) {
      recursiveComb(letter + word[i], arr.slice(1, arr.length));
    }
  }
  recursiveComb("", possibleWords);

  return result;
}

console.log(letterCombinations("23"));
