function isValid(s: string): boolean {
  let stack = [];
  for (let i of s) {
    if (
      i.charCodeAt(0) === 123 ||
      i.charCodeAt(0) === 91 ||
      i.charCodeAt(0) === 40
    ) {
      stack.push(i);
    } else {
      let lastInStack = stack.pop();

      if (i.charCodeAt(0) === 41) {
        if (lastInStack?.charCodeAt(0) !== 40) return false;
      } else if (i.charCodeAt(0) === 93) {
        if (lastInStack?.charCodeAt(0) !== 91) return false;
      } else if (i.charCodeAt(0) === 125) {
        if (lastInStack?.charCodeAt(0) !== 123) return false;
      }
    }
  }

  return stack.length > 0 ? false : true;
}

console.log(isValid("(){}}{}{}{}{"));

// Round Brackets or Parentheses:
// Open/Left Parenthesis: ( (ASCII value: 40)
// Close/Right Parenthesis: ) (ASCII value: 41)

// Square Brackets:
// Open/Left Square Bracket: [ (ASCII value: 91)
// Close/Right Square Bracket: ] (ASCII value: 93)

// Curly Braces:
// Open/Left Curly Brace: { (ASCII value: 123)
// Close/Right Curly Brace: } (ASCII value: 125)
