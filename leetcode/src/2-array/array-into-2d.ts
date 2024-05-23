function findMatrix(nums: number[]): number[][] {
  // // finding frequency
  // const frequencyMap: Map<number, number> = new Map();
  // for (const num of nums) {
  //     frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  // }
  // console.log(frequencyMap)

  // //maximum frequency
  // let maxFrequency = 0;
  // for(let freq of frequencyMap.values()) maxFrequency = Math.max(maxFrequency, freq)
  // console.log(maxFrequency)

  // //building 2d array
  // const matrix: number[][] = Array.from({ length: maxFrequency }, () => []);
  // const newMap: Map<number,number> = new Map();
  // for(let num of nums){
  //     let count = newMap.get(num) || 0;
  //     matrix[count].push(num)
  //     newMap.set(num,count+1)
  // }
  // console.log(matrix)

  // return matrix

  const matrix = [];
  while (nums.length) {
    const seen = new Set();
    const newNum = [];
    const row = [];
    for (let num of nums) {
      if (!seen.has(num)) {
        seen.add(num);
        row.push(num);
      } else {
        newNum.push(num);
      }
    }
    matrix.push(row)
    nums = newNum;
  }

  return matrix
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));

// function findMatrix(nums: number[]): number[][] {
//     const matrix = []

//     while (nums.length) {
//         const seen = new Set()
//         const row = []
//         const newNums = []
//         for (let i = 0; i < nums.length; i++) {
//             if (!seen.has(nums[i])) {
//                 seen.add(nums[i])
//                 row.push(nums[i])
//             } else
//                 newNums.push(nums[i])
//         }
//         matrix.push(row)
//         nums = newNums
//     }

//     return matrix
// };
