function findRestaurant(list1: string[], list2: string[]): string[] {
  let result: string[] = [];
  let minmumIndex: number = Infinity;

  for (let i = 0; i < list1.length; i++) {
    let indexOfie = list2.indexOf(list1[i]);
    console.log(i, indexOfie);
    if (indexOfie !== -1) {
      if (i + indexOfie === minmumIndex) result.push(list1[i]);
      else if (i + indexOfie < minmumIndex) {
        result = [list1[i]];
        minmumIndex = i + indexOfie;
      }
    }
  }

  return result;
}

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
);

// for (let i = 0; i < list1.length; i++) {
//     for (let j = 0; j < list2.length; j++) {
//       if (list1[i] === list2[j] && minmumIndex === Math.abs(i + j)) {
//         result.push(list1[i]);
//       }
//       if (list1[i] === list2[j] && minmumIndex > Math.abs(i + j)) {
//         result = [list1[i]];
//         minmumIndex = Math.abs(i + j);
//       }
//     }
//   }
