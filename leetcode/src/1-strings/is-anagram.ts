function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === s.split("").sort().join("");
  //   really slow
  // if (t.length !== s.length) return false;
  //   t.split("").forEach((char) => (s = s.replace(char, "")));
  //   return !s.length;
}

console.log(isAnagram("cat", "tac"));
