function checkAnagram(source: string, target: string): boolean {
  if (source.length !== target.length) return false;

  for (let i = 0; i < source.length; i++) {
    let indexOfLe = target.indexOf(source[i]);
    if (indexOfLe === -1) return false;
    target = target.slice(0, indexOfLe) + target.slice(indexOfLe + 1);
  }

  return target.length === 0 ? true : false;
}

// function groupAnagrams(strs: string[]): string[][] {
//   let result = [];

//   let visited = new Array(strs.length).fill(false);

//   for (let i = 0; i < strs.length; i++) {
//     if (visited[i]) continue;
//     let temp = [strs[i]];

//     for (let j = i + 1; j < strs.length; j++) {
//       if (!visited[j] && checkAnagram(strs[i], strs[j])) {
//         temp.push(strs[j]);
//         visited[j] = true;
//       }
//     }
//     result.push(temp);
//     visited[i] = true;
//   }

//   return result;
// }

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr)?.push(str);
    }

    console.log(map)
    return Array.from(map.values());
}