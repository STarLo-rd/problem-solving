function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;
    const answer = new Array(length);

    // answer[i] contains the product of all the elements to the left
    answer[0] = 1;
    for (let i = 1; i < length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    console.log(answer)
    // R contains the product of all the elements to the right
    let R = 1;
    for (let i = length - 1; i >= 0; i--) {
        // answer[i] is the product of all elements to the left and right
        answer[i] = answer[i] * R;
        R *= nums[i];
    }

    return answer;
}

console.log(productExceptSelf([1,2,3,4]));
