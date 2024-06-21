function removeDuplicates(nums: number[]): number {

    if (nums.length === 0) return 0;

    let k = 1; // index for the next unique element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
    
};

console.log(removeDuplicates([1,1,2,2,1]))