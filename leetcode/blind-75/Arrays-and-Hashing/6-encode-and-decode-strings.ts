class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let result = "";
    for (let str of strs) {
      result += str.length + "#" + str;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    let result: string[] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] != "#") j++;
      let len = parseInt(str.substring(i, j));
      result.push(str.substring(j + 1, j + 1 + len));
      i = j + 1 + len;
    }

    return result;
  }
}

const solution = new Solution();

let encodedStr = solution.encode(["neet", "code", "love", "you"]);
console.log(encodedStr);
let decodedStr = solution.decode(encodedStr);
console.log(decodedStr);
