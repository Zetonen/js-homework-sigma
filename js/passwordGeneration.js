export function passwordGeneration() {
  const passwordLength = Math.floor(Math.random() * 15) + 6;
  const options = [
    "_",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let password = "";
  let upperCase = 0;
  let countNumbers = 0;
  const regexAlphabet = /[A-Z]/;
  const regexNumbers = /[0-9]/;
  for (let i = 0; i < passwordLength; i += 1) {
    const randomIndex = Math.floor(Math.random() * options.length);
    const passwordSymbol = options[randomIndex];
    if (passwordSymbol === "_") {
      if (password.includes("_")) {
        i -= 1;
        continue;
      }
    }
    if (passwordSymbol.match(regexAlphabet) !== null) {
      if (upperCase === 2) {
        i -= 1;
        continue;
      }
      upperCase += 1;
    }
    if (passwordSymbol.match(regexNumbers) !== null) {
      if (countNumbers === 5 || passwordSymbol === password.slice(-1)) {
        i -= 1;
        continue;
      }
      countNumbers += 1;
    }
    password += passwordSymbol;
  }
  return password;
}
