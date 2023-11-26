function skipACharacter(str: String, skip: string): String | null {
  if (str.length === 0) return "";
  if (str.startsWith(skip))
    return skipACharacter(str.substring(skip.length), skip);
  else return str[0] + skipACharacter(str.substring(1), skip);
}

console.log(skipACharacter("startypelord", "type"));
