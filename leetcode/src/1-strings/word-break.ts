function wordBreak(s: string, wordDict: string[]): boolean {
  let visited: boolean[] = new Array(wordDict.length).fill(false);
  for (let i = 0; i < wordDict.length; i++) {
    let word = wordDict[i];
    let index = s.indexOf(word);
    while (index !== -1) {
      visited[i] = true;
      s =
        s.substring(0, s.indexOf(word)) +
        s.substring(s.indexOf(word) + word.length);

      index = s.indexOf(word);
    }
  }

  if (visited.some((val) => val === false)) {
    return false;
  }
  return s.length === 0 ? true : false;
}

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("leetcode", ["leet", "code"]));
