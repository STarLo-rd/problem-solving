function maxProfit(prices: number[]): number {
    let max = 0;

    let minimum = prices[0]
    for(let i=0; i<prices.length; i++){
        minimum = Math.min(minimum, prices[i])
        max = Math.max(max, prices[i] - minimum)
    }

    return max;
    
};

console.log(maxProfit([7,1,5,3,6,4]))