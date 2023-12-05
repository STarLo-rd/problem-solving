function executeInstructions(
  n: number,
  startPos: number[],
  s: string
): number[] {
  let result = [];

  // create a matrix
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = true;
    }
  }

  let robo = arr[startPos[0]][startPos[1]];

  result.push(startPos.slice()); // Save initial position

  while (s.length !== 0) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "R" && startPos[1] + 1 < n) {
        startPos[1]++;
        robo = arr[startPos[0]][startPos[1]];
        count++;
      } else if (s[i] === "D" && startPos[0] + 1 < n) {
        startPos[0]++;
        robo = arr[startPos[0]][startPos[1]];
        count++;
      } else if (s[i] === "L" && startPos[1] - 1 >= 0) {
        startPos[1]--;
        robo = arr[startPos[0]][startPos[1]];
        count++;
      } else if (s[i] === "U" && startPos[0] - 1 >= 0) {
        startPos[0]--;
        robo = arr[startPos[0]][startPos[1]];
        count++;
      } else {
        break;
      }
    }
    s = s.substring(1, s.length);
    result.push(count);
  }
  return result; // Flatten the result array
}

console.log(executeInstructions(3, [0, 1], "RRDDLU"));
