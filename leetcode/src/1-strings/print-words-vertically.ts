function printVertically(s: string): string[] {
  const arr = s.split(" ");
  const maxLength = Math.max(...arr.map((word) => word.length));

  return [...Array(maxLength)].map((_, i) =>
    arr.map((word) => (word[i] || " ").trimEnd()).join("")
  );
}

// Example usage:
console.log(printVertically("HOW ARE YOU"));
console.log(printVertically("TO BE OR NOT TO BE"));
console.log(printVertically("CONTEST IS COMING"));
