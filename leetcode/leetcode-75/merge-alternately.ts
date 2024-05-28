function mergeAlternately(word1: string, word2: string): string {
    let str= ""
    let i = 0;
    while(i < word1.length && i <word2.length){
        str += word1[i] + word2[i]
        i++
    }
    while(i < word1.length) {str+=word1.substring(i, word1.length); i= word1.length}
    while(i < word2.length) {str+=word2.substring(i, word2.length); i = word2.length}
    return str;

    //REVIEW: MOST OPTIMUM
    // let str = "";
    // const len = word1.length > word2.length ? word1.length : word2.length;

    // for (let i = 0; i < len; i++) {
    //     str = str + (word1[i] ?? "");
    //     str = str + (word2[i] ?? "");
    // }

    // return str;
};

console.log(mergeAlternately("abc1","pqress00"))