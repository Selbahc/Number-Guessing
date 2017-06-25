var computerNumber = Math.round(Math.random() * 100);
var userNumber = Number(prompt("Guess the computer chosen number (beetween 0 and 100)"));

var count = 0,
  indication = '';

function compareNumbers() {
  while ((count < 9) && (computerNumber != userNumber) && !isNaN(userNumber)) {
    userNumber > computerNumber ? indication = 'SMALLER' : indication = 'GREATER';
    userNumber = Number(prompt(` It is ${indication} than ${userNumber}\nTRY AGAIN:`));
    count++;
  }
  continueGame();
}

function continueGame() {
  if (isNaN(userNumber)) {
    userNumber = Number(prompt('Please enter a numerical value'));
    compareNumbers();
  } else if (count == 9 && userNumber !== computerNumber) {
    alert(`Game Over !\n(10 attempts max)\n\nIt was ${computerNumber}`);
  } else if (userNumber == computerNumber) {
    alert(`BRAVO!\nIt was ${userNumber}!\n\nYou guessed it in ${count} times.`);
  } else {
    compareNumbers();
  }
}

compareNumbers();
