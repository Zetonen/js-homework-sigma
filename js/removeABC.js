export function removeABC(str) {
  if (!str || str.length === 0) {
    return 0;
  }
  const vowels = ["a", "b", "c"];
  let noMatches = true;
  let sentence = str;
  for (const vowel of vowels) {
    if (noMatches) {
      sentence.includes(vowel) ? (noMatches = false) : "";
    }
    sentence = sentence.replaceAll(vowel, "");
  }
  if (noMatches) {
    return null;
  }
  sentence = sentence.replace(/\s+/g, " ");
  return sentence;
}
