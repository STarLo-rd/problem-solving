function findTheDifference(s: string, t: string): string {
  let sumOfS = s.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  let sumOfT = t.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);

  console.log(sumOfS, sumOfT);
  console.log(sumOfT - sumOfS);

  return String.fromCharCode(sumOfT - sumOfS);
}

console.log(findTheDifference("a", "aa"));
