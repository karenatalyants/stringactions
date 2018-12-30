// report all the letters in a given string that are positioned after a given letter in the English alphabet

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

function letterAfter(string, letter) {
  var resultLetters = [];
  for (let i = 0; i < string.length; i++) {
    if (alphabet.indexOf(string[i]) > alphabet.indexOf(letter) && resultLetters.includes(string[i]) === false) {
      resultLetters.push(string[i]);
    }
  }
  if (resultLetters.length > 0) {
    console.log(`The letters that are contained in string ${string} and are after letter ${letter} in the English alphabet are ${resultLetters}.`);
  } else {
    console.log(`There are no letters in the string ${string} that are positioned after letter ${letter} in the English alphabet.`);
  }
}

letterAfter("suchawonderfullife", "c");