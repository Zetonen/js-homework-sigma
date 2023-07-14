export function balanceBrackets(str) {
  if (!str) {
    return 0;
  }
  const brackets = [];
  for (const letter of str) {
    if (letter === "(") {
      brackets.push(letter);
    } else if (letter === ")") {
      if (brackets.length === 0) {
        return false;
      }
      brackets.pop();
    }
  }
  return brackets.length === 0;
}
