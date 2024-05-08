function subset(arr: string[]): string[][] {
  let outer: string[][] = [];
  outer.push([]);

  for (let num of arr) {
    let n = outer.length;
    for (let i = 0; i < n; i++) {
      let internal = [...outer[i]];
      internal.push(num);
      outer.push(internal);
    }
  }

  return outer;
}

let arr: string[] = ["a", "b"];
console.log(subset(["a", "b"])); 
