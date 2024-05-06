function twoSum(nums: number[], target: number): number[] {
    
    let obj = {};

    for(let i=0; i<nums.length; i++){
        const compilment = target - nums[i];
        if(obj.hasOwnProperty(compilment)){
            return [obj[compilment], i]
        }

        obj[nums[i]] = i
        console.log(obj)

    }


    return []
};

console.log(twoSum([2,7,11,15],26))