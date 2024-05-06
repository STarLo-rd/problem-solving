function isAnagram2(s: string, t: string): boolean {

    const temp = new Array(128).fill(0);

    for(let i =0; i < s.length; i++){
        temp[s[i].charCodeAt(0)] +=1
    }
    
    for(let i =0; i<t.length; i++){
        const charCode = t.charCodeAt(i)
        temp[charCode]--;
        if(temp[charCode] < 0) return false;
    }


    return true;
};


console.log(isAnagram2("anagram", "nagaram")); // true