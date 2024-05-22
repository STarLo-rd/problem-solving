function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];

    // Sorting the array makes it easier to handle duplicates and identify combinations
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // To avoid duplicates, skip if the current element is the same as the previous one
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // To avoid duplicates, skip elements if they are the same as previous ones
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}


console.log(threeSum([-1,0,1,2,-1,-4]))
 console.log(threeSum([0,0,0,0]))