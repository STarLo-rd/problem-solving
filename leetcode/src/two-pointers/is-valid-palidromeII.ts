function isPalindrome(s){
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

function validPalindrome(s: string): boolean {

    for(let i = 1; i<s.length + 1; i++){
        let newString = s.substring(0 ,i-1) + s.substring(i, s.length);
        console.log(newString)
        if(isPalindrome(newString)) return true
    }
    
    return false;
    
};

console.log(validPalindrome("eccer"))
