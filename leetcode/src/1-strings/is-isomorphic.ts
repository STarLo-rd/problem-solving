function isIsomorphic(s: string, t: string): boolean {
  const charMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (charMap.has(charS)) {
      if (charMap.get(charS) !== charT) {
        return false;
      }
    } else {
      if (Array.from(charMap.values()).includes(charT)) {
        return false;
      }
      charMap.set(charS, charT);
    }
  }

  return true;
}

console.log(isIsomorphic("badc", "baba"));
