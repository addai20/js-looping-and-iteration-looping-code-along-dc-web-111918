// Code your solutions in this file


//#### for loop example
// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }


function printBadges(array){
  for (i = 0; i <array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
    return array
}

function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++
  }
    return `You got ${tails} tails in a row!`;
}
