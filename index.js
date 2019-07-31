function dwarfRollCall(dwarves) {
  let dwarves_string = [];
  let halfLength = dwarves.length/2;
  for (let i = halfLength; i < dwarves.length; i++) {
    dwarves_string.push(`${i+1}. ${dwarves[i]} `);
  }
  return dwarves_string.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var Array_calls = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    Array_calls.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return Array_calls;
}

function longPlaneteerCalls(words) {
  if (words.length > 4) {
    return true;
  } else {
    return false;
  }
}


function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] == "cheddar") {
      return foods[i];
    } else if (foods[i] == "swiss") {
      return foods[i];
    }
  }
  return "no cheese!";
}


function wordsThatStartWithB(words){
  var bWords = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("b")) {
      bWords.push(words[i])
    }
  }
  return bWords
}

"eric".toUpperCase() // ERIC
"eric".startsWith("b") // false
"bob".startsWith("b") // true

wordsThatStartWithB(['bob', 'billy', 'joe']) // ['bob', 'billy']
wordsThatStartWithB(['banana', 'pineapple', 'apple']) // ['banana']
