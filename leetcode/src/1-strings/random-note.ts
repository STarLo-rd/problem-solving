function canConstruct(ransomNote: string, magazine: string): boolean {
  const counter: number[] = Array(26).fill(0);

  for (const ch of magazine) {
    counter[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const ch of ransomNote) {
    if (counter[ch.charCodeAt(0) - "a".charCodeAt(0)]-- <= 0) {
      return false;
    }
  }

  return true;
}

console.log(canConstruct("aa", "aab"));

// for (let i = 0; i < ransomNote.length; i++) {
//     let le = ransomNote[i];
//     let matchIndex = magazine.indexOf(le);
//     if (matchIndex === -1) return false;
//     magazine =
//       magazine.substring(0, matchIndex) +
//       magazine.substring(matchIndex + 1, magazine.length);
//     console.log(magazine);
//   }

// let visited = new Array(magazine.length).fill(false);

//   for (let i = 0; i < ransomNote.length; i++) {
//     let state = false;
//     for (let j = 0; j < magazine.length; j++) {
//       if (ransomNote[i] === magazine[j] && visited[j] === false) {
//         visited[j] = true;
//         state = true;
//         break;
//       }
//     }
//     if (!state) return false;
//   }

//   console.log(visited);
//   return true;
