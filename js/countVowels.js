export function countVowels(str) {
  if (!str || str.length === 0) {
    return 0;
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(e => vowels.includes(e)).length;
}
