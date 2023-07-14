export function repeatingCharacters(str) {
  if (!str || str.length === 0) {
    return 0;
  }
  const letterCount = {};
  for (const letter of str) {
    letterCount[letter] = letterCount[letter] ? letterCount[letter] + 1 : 1;
  }
  const letterCountArr = Object.entries(letterCount).sort(
    (a, b) => b[1] - a[1]
  );
  let result = "";
  for (const el of letterCountArr) {
    result += el[0].repeat(el[1]);
  }
  return result;
}
