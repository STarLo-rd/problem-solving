function romanToInt(s: string): number {
  let sum = 0;

  const romanToIntMap = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];
    if (romanToIntMap.get(current) < romanToIntMap.get(next)) {
      sum += romanToIntMap.get(next) - romanToIntMap.get(current);
      i++;
      if (i === s.length - 1) break;
    } else sum += romanToIntMap.get(current);
  }

  return sum;
}

console.log(romanToInt("MCMXCIV"));
