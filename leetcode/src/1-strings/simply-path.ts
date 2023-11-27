function simplifyPath(path: string): string {
  const stack: string[] = [];

  const splittedPath = path.split("/");

  for (let i = 1; i < splittedPath.length; i++) {
    if (splittedPath[i] === ".") {
      continue;
    } else if (splittedPath[i] === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (splittedPath[i]) {
      stack.push(splittedPath[i]);
    }
  }

  const result = "/" + stack.join("/");

  return result;
}
console.log(simplifyPath("../starlord/.."));
