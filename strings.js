// a. Given 2 strings, find all occurences of the second string in the first.


let occurence = 0;

//debugger;

const occur = function(string1, string2) {

  let hit = 0;
  let a = 0;

  if (string2.length > string1.length) {
    console.log("Error: the second string is longer than the first one")
    return;
  }

  const resetHits = function() {
    hit = 0;
  }
  const resetA = function() {
    a = 0;
  }

  for (let position = 0; position < string1.length; position++) {

    if (string2[a] === string1[position]) {
      a = a + 1;
      hit = hit + 1;
    } else if (string2[0] === string1[position]) {
      hit = 1;
      a = 1;
    } else {
      resetHits();
      resetA();
    }
    if (hit === string2.length) {
      occurence = occurence + 1;
      resetHits();
      resetA();
    }
  }
  return occurence;
}

occur("x6XcxHJNr6dC99NjUxLy2nyFpY8edfclsf37psrauQ0bdBpN9FnVCJQmDhZaGbs33NgK7wHdtpdmorVUxwlqBt5gszYklVZ", "x");
console.log(occurence);



/// or


const occur = function(string1, string2) {
  let occurences = [];
  let a = string1.indexOf(string2);

  while (a !== -1) {
    occurences.push(a);
    //  x = a + 1 + string2.length;
    a = string1.indexOf(string2, a + 1);
  }

  console.log(occurences);
  return occurences;
}

occur("abrakadabra", "abr");

// b. Given 2 strings, establish if the second is a reflection of the first.
// A reflection is defined (in this case) as a reversal, i.e, 'cba' is the reflection of 'abc'.

//debugger;
const reflection = function(string1, string2) {
  if (string1.length != string2.length) {
    console.log("Can not check reflection for strings that are not equal in length");
    return;
  }

  if (string1.length === 1) {
    console.log("Checking reflection for one character strings makes no sense :)");
    return;
  }

  let hit = 0;

  for (let a = 0; a < string1.length; a++) {
    if (string1[a] === string2[string2.length - 1 - a]) {
      hit = hit + 1;
    } else {
      console.log("No reflection found")
      return;
    }
    if (hit === string1.length) {
      console.log("The second string is the reflection of the first one");
      return;
    }
  }
}


reflection("abc", "CBA");

//c. Given a string, find all the words (a word is separated by spaces) that can be made out of it.

const wordFinder = function(string) {
  let wordCount = 0;
  let spaceCount = 0;

  for (let a = 0; a < string.length; a++) {
    if
    if (string[a] === " ") {

    }
  }


}



//d. Given a string and a character, find all occurances of the character in the string.


const charOccur = function(string, char) {

  let charOccurence = 0;


  for (let position = 0; position < string.length; position++) {
    if (string[position] === char) {
      charOccurence = charOccurence + 1;
    }
  }
  console.log(charOccurence);
}

charOccur("abrakadabra", "b")


// OR using indexOf();

const charOccurenceIo = function(string, char) {
  var a = string.indexOf(char);
  console.log(a);
}

charOccurenceIo("bumbarabum", "b");







//e. Given a string, count occurences for every letter.

//debugger;

let letterOccurence = 0;
let checkedPool = "";

const letterOccur = function(string) {

  const wasChecked = function(position) {
    let checked = false;
    for (let c = 0; c < position; c++) {
      if (checkedPool[c] === string[position]) {
        checked = true;
      }
    }
    return checked;
  }

  for (let position = 0; position < string.length; position++) {

    if (wasChecked(position) === true) {
      position = position + 1;
    }
    if (wasChecked(position) === false) {
      for (let a = 0; a < string.length; a++) {
        if (string[a] === string[position]) {
          letterOccurence = letterOccurence + 1;
        }
        if (a === string.length - 1) {
          console.log("The letter " + string[position] + " occurs in the word " + string + " " + letterOccurence + " times");
          letterOccurence = 0;
        }
      }
    }
    checkedPool = checkedPool + string[position];
  }
}

letterOccur("abrakadabra");


//f. Given 2 strings, identify if both strings use the same character set,
// i.e, 'daffy' and 'fadfy' use the same character set.



const charSetComparer = function(string1, string2) {


  if (string1.length != string2.length) {
    console.log("Can't check for strings that are not equal in length");
    return;
  }

  for (let a = 0; a < string1.length; a++) {




  }

}