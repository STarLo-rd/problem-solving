function maximumNumberOfStringPairs(words: string[]): number {
  let visited = new Array(words.length);
  console.log(visited);

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (!visited[i]) {
      for (let j = i + 1; j < words.length; j++) {
        if (!visited[j] && words[i].split("").reverse().join("") === words[j]) {
          count++;
          visited[j] = 1;
          console.log(words[i], words[j]);
        }
      }
    }
  }

  return count;
}

console.log(
  maximumNumberOfStringPairs([
    "xi",
    "nw",
    "qp",
    "to",
    "oo",
    "xp",
    "ix",
    "wn",
    "pq",
  ])
);
