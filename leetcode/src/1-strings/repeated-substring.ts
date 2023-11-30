function isRepeatedSubstring(substring: string, str: string): boolean {
  const len = substring.length;
  const totalLength = str.length;

  if (len === 0 || totalLength % len !== 0) {
    return false;
  }

  const repetitions = totalLength / len;
  const constructedString = substring.repeat(repetitions);

  return constructedString === str;
}

function repeatedSubstring(str: string): boolean {
  const len = str.length;

  for (let i = 1; i <= len / 2; i++) {
    const candidate = str.substring(0, i);
    console.log(candidate);

    if (isRepeatedSubstring(candidate, str)) {
      return true;
    }
  }

  return false;
}
console.log(repeatedSubstring("abab"));
