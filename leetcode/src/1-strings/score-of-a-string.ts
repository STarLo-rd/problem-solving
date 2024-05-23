function scoreOfString(s: string): number {
        let sum = 0;
        for (let i = 0; i < s.length - 1; i++) {
            sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        }
        return sum;
//     if(s.length == 0) return 0;
//     if (s.length === 1) return s.charCodeAt(0)
//    let left = 0;
//    let right = 1;
//    let sum = 0;
//    while(right !== s.length){
//    sum+= Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
//     left++;
//     right++;
//    }

//     return sum
};

console.log(scoreOfString("hello"))