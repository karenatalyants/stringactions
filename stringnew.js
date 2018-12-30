// report all the letters in a given string that are positioned after a given letter in the English alphabet


// found an easier way to create an array with all the alphabet letters instead of manually typing it :D
const alph = "abcdefghijklmnopqrstuvwxyz";
const alphabet = alph.split(/(?=[\s\S])/u);


// this is the function
function letterAfter(string, letter) {

  // empty array
  var resultLetters = [];

  // looping over the portion of the alphabet that stands after the specified letter, for every letter in the string
  for (let i = 0; i < string.length; i++) {


    // checking if a letter in our string stands after the specified letter in the alphabet
    // also making sure we are not adding duplicates to our list of letters using .includes()
    if (alphabet.indexOf(string[i]) > alphabet.indexOf(letter) && resultLetters.includes(string[i]) === false) {
      // adding the desired letter to the resulting list
      resultLetters.push(string[i]);
      // sorting the list, by default sorts just like we need (in the order of alphabet)
      resultLetters.sort();
    }
  }

  // making sure we properly treat the situation when there is nothing found
  if (resultLetters.length > 0) {
    console.log(`The letters that are contained in string ${string} and are after letter ${letter} in the English alphabet are ${resultLetters}.`);
  } else {
    console.log(`There are no letters in the string ${string} that are positioned after letter ${letter} in the English alphabet.`);
  }
}

letterAfter("suchawonderfullife", "c");