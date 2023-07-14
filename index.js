import { maxValue } from "./js/maxValue.js";
import { minLengthWords } from "./js/minLengthWords.js";
import { solution } from "./js/solution.js";
import { averages } from "./js/averages.js";
import { countVowels } from "./js/countVowels.js";
import { removeABC } from "./js/removeABC.js";
import { difference } from "./js/difference.js";
import { keyValueChange } from "./js/keyValueChange.js";
import { calculateDifference } from "./js/calculateDifference.js";
import { doesBrickFit } from "./js/doesBrickFit.js";
import { findFileName } from "./js/findFileName.js";

import { adjacentNumbers } from "./js/adjacentNumbers.js";
import { textEditing } from "./js/textEditing.js";
import { balanceBrackets } from "./js/balanceBrackets.js";
import { passwordGeneration } from "./js/passwordGeneration.js";
import { arraySorting } from "./js/arraySorting.js";
import { repeatingCharacters } from "./js/repeatingCharacters.js";

import { caesar } from "./js/caesar.js";
import { anagram } from "./js/anagram.js";
import { university } from "./js/university.js";
import { textVerification } from "./js/textVerification.js";
const refs = {
  brackets: document.querySelector(".brackets"),
};
//1
console.log("Задача 1 - ", maxValue([0, 1, 2, 3, -4]));
//2
const str =
  "Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число.";
console.log("Задача 2 - ", minLengthWords(str, 6));
// 3
console.log("Задача 3 - ", solution("abc", "c"));
//4
console.log("Задача 4 - ", averages([1, 3, 5, 1, -10]));
//5
console.log("Задача 5 - ", countVowels("Celebration"));
console.log("Задача 5.2 - ", removeABC("This might be a bit hard"));
//6
console.log("Задача 6 - ", difference([1, 2, 3], [100, 2, 1, 10]));
//7
console.log(
  "Задача 7 - ",
  keyValueChange({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);
//8
console.log(
  "Задача 8 - ",
  calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)
);
//9
console.log("Задача 9 - ", doesBrickFit(1, 2, 2, 1, 1));
//10
console.log(
  "Задача 10 - ",
  findFileName("c:\\WebServers\\home\\testsite\\www\\myfile.tx")
);
//11
console.log("Задача 11  - ");
//12
console.log("Задача 12 - ", adjacentNumbers([4, 9, 11, 6, 2, 8]));

//13
console.log(
  "Задача 13 - ",
  textEditing(
    "пАпА 3333 купив собі https://drive.google.com/drive/folders/1ENa8mVR6vs2h0Nkry0q2h0r2K0sc9m-3 та graf.lancelot7@gmail.com"
  )
);
//14
const textBrackets = "Я хочу написати код (бажано якісний)";
const balance = balanceBrackets(textBrackets);
if (balance) {
  refs.brackets.textContent = textBrackets;
  refs.brackets.addEventListener("copy", (e) => {
    e.clipboardData.setData("text/plain", "Копирование запрещено");
    e.preventDefault();
  });
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}
console.log("Задача 14 - ", balanceBrackets(textBrackets));
//15
console.log("Задача 15 - ", passwordGeneration());
//16
console.log("Задача 16 - ", arraySorting([1, 2, 3, 4, 5, 6]));
//17
console.log("Задача 17 - ", repeatingCharacters("dandelions"));
//18
console.log("Задача 18 -");
//19
console.log("Задача 19 ", caesar("banana", 3));
//20
console.log("Задача 20 ", anagram("banana", "abnnaa"));
//21
university.addStudent({
  name: "Andrew",
  id: 1,
  course: 2,
  faculty: "PBF",
});
university.addStudent({
  name: "Oleg",
  id: 2,
  course: 2,
  faculty: "UTF",
});
university.addStudent({
  name: "Masha",
  id: 3,
  course: 2,
  faculty: "PBF",
});
console.log("Задача 21 ", university.getByFaculty("PBF"));
//22
const text =
  "Lorem ipsum, dolor sit amet consectetur 4 adipisicing elit. 333 Eveniet facere 333 dolorem reiciendis laborum iste numquam quidem, aliquam in odio, adipisci nemo minima? Iure omnis quaerat pariatur? Assumenda doloribus officia reiciendis minima labore nisi, cupiditate quasi id?";
console.log("Задача 22 ", textVerification(text));
console.log(isNaN("o"));
