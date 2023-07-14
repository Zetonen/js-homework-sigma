export function textEditing(str) {
  if (!str) {
    return 0;
  }
  let sentence = str[0].toUpperCase() + str.slice(1).toLowerCase();
  sentence = editingStr(sentence);
  outputMessage(str, sentence);
  return sentence;
}

function editingStr(str) {
  const words = str.split(" ");
  return words
    .map((word) => {
      const wordIsNan = isNaN(word);
      if (word.startsWith("http://") || word.startsWith("https://")) {
        return "[посилання заборонено]";
      } else if (word.includes("@") && word.includes(".")) {
        return "[контакти заборонені]";
      } else if (word.length >= 3 && !wordIsNan) {
        return "";
      }
      return word;
    })
    .join(" ")
    .replace(/\s+/g, " ");
}

function outputMessage(strA, strB) {
  if (strA.length < strB.length) {
    setInterval(() => {
      alert("чи потрібна нам допомога?");
    }, 5000);
  }
}
