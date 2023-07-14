export function anagram(strA, strB) {
  if (!strA || strA.length === 0 || !strB || strB.length === 0) {
    return 0;
  }
  let a = strA.split('').sort().join('');
  let b = strB.split('').sort().join('');
  return a === b;
}
