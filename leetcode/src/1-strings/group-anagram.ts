function groupAnagrams(strs: string[]): string[][] {
  const groupsMap = new Map<string, string[]>();

  for (const word of strs) {
    const sortedWord = [...word].sort().join("");

    if (groupsMap.has(sortedWord)) {
      groupsMap.get(sortedWord)!.push(word);
    } else {
      groupsMap.set(sortedWord, [word]);
    }
  }

  return Array.from(groupsMap.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
