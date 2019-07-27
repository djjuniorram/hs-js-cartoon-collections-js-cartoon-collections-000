function dwarfRollCall(dwarves) {
  let dwarves_string = [];
  for (let i = 0; i < dwarves.length; i++) {
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
    } else {
    }
  }
  return "no cheese!";
}
