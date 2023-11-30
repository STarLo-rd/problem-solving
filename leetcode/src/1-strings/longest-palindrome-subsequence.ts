function longestPalindromeSubseq(str: string): number {
  let max = 0;

  function checkIsPalindrome(inp: string): boolean {
    if (inp === inp.split("").reverse().join("")) return true;
    return false;
  }

  function subsequence(p: string, up: string): void {
    if (up.length === 0) {
      if (max < p.length && checkIsPalindrome(p)) {
        max = p.length;
      }
      return;
    }

    let ch = up.charAt(0);

    subsequence(p + ch, up.substring(1));
    subsequence(p, up.substring(1));
  }

  subsequence("", str);
  return max;
}

console.log(longestPalindromeSubseq("abbbnnnb"));
