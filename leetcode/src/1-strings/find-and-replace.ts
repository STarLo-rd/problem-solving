function findReplaceString(
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string {
  let result: string = s;

  for (let i = indices.length - 1; i >= 0; i--) {
    const index = indices[i];
    const source = sources[i];
    const target = targets[i];

    if (result.substring(index, index + source.length) === source) {
      result =
        result.substring(0, index) +
        target +
        result.substring(index + source.length);
    }
  }

  return result;
}

console.log(findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]));
