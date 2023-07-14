export function textVerification(str) {
  if (!str || str.length === 0) {
    return 0;
  }
  const wordCount = str.match(/\b\w+\b/g).length;
  const sentenceCount = str.match(/[.!?]+/g).length;
  const letterCount = str.replace(/\s/g, "").length;
  const wordFrequency = {};
  str
    .match(/\b\w+\b/g)
    .forEach((word) =>
      !isNaN(word)
        ? ""
        : (wordFrequency[word]
        ? (wordFrequency[word] += 1)
        : (wordFrequency[word] = 1))
    );
  const sortWordFrequency = Object.entries(wordFrequency).sort(
    (a, b) => b[1] - a[1]
  );
  let maxFrequency = sortWordFrequency[0];
  return {
    wordCount: wordCount,
    sentenceCount: sentenceCount,
    letterCount: letterCount,
    frequentWord: maxFrequency,
  };
}
