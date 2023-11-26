function skipAWord(str: String, le: String): String | null {
  if (str.length === 0) return "";
  console.log(str.charAt(0) === le);
  return (
    (str.charAt(0) == le ? "" : str.charAt(0)) + skipAWord(str.substring(1), le)
  );
}

console.log(skipAWord("starlord", "a"));
