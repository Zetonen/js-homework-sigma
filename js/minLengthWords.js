export function minLengthWords(str, len) {
    if (!str || str.length === 0) {
      return 0;
    }
    const symbol = [",", ".", "?", "!"];
    let words = str;
    symbol.forEach((symb) => (words = words.replaceAll(symb, "")));
    words = words.split(" ");
    return words.filter((word) => {
      if (word)
        if (word.length > len) {
          return word;
        }
    });
  }