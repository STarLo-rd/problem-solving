function reverseStr(s: string, k: number): string {
  const arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, arr.length - 1);

    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  return arr.join("");
}

console.log(reverseStr("abcdefg", 2));
