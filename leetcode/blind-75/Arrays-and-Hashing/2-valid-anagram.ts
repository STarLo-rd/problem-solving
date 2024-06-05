function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const temp = new Array(128).fill(0);

  for (let i = 0; i < s.length; i++) {
    temp[s[i].charCodeAt(0)] += 1;
  }

  for (let i = 0; i < t.length; i++) {
    const charCode = t.charCodeAt(i);
    temp[charCode]--;
    if (temp[charCode] < 0) return false;
  }

  return true;
}
