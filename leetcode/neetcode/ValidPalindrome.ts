function validPalindrome(s: string): boolean {
  if (s.length === 0 || s.length === 1) return true;

  let trimmedString = s.trim();

  // Remove special characters using regular expression
  let cleanedString = trimmedString.replace(/[^a-zA-Z0-9]/g, "");

  // Convert all characters to lowercase
  cleanedString = cleanedString.replace(/\s+/g, "");
  let lowercaseString = cleanedString.toLowerCase();
  console.log(cleanedString)

  console.log(lowercaseString.length, Math.ceil(lowercaseString.length/ 2))

  for(let i=0; i<Math.ceil(lowercaseString.length/ 2) ; i++){
    if (lowercaseString[i] !== lowercaseString[lowercaseString.length - i-1]) return false;
  }

  return true;
}

// console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("ab_a"));

