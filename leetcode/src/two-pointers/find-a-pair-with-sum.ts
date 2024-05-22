const findPairWithSum = (_arr: number[], target: number) => {

    let left = 0;
    let right = _arr.length - 1;
    let result = []

    while(left < right){
        const total = _arr[left] + _arr[right]
        if(total === target){
            result.push([_arr[left], _arr[right]])
            left++;
        }
        else if(total > target){
            right--;
        }else left++
    }

    return result;
}
const _arr = [1, 2, 3, 4, 5, 6, 7];
const target = 9;
console.log(findPairWithSum(_arr, target)); // Output: [2, 7]