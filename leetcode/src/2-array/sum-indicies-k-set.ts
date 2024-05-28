function sumIndicesWithKSetBits(nums: number[], k: number): number {

    let result = 0;

    function findingBits(num){
        // let bits = "";
        // let remainder = 0;
        // while(num >= 1){
        //     remainder = num % 2;
        //     bits=remainder+bits
        //     num = Math.floor(num/2)
        // }
        // if(num === 1) bits = "1"+bits

        // return bits
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }

    // for(let num in nums){
        // let bits = findingBits(num)
        // let totalOnes = bits.split("").reduce((a,b) => Number(a)+ Number(b), 0)
        // console.log(totalOnes)
        // if(totalOnes === k){
        //     result+=nums[num]
        // }
    // }

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (findingBits(i) === k) {
            sum += nums[i];
        }
    }

    return sum;
};

console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1))



