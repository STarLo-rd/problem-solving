function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();

    for(let i = 0; i<nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 0)
        }
        map.set(nums[i] , map.get(nums[i]) + 1) 
    }

    console.log("map",map)

    return Array.from(map.keys())
    .sort((a, b) => map.get(b) - map.get(a))
    .slice(0, k);
    
};


console.log(topKFrequent([1,1,1,2,2,2,2,2,3],1))