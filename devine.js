var computerNumber = Math.round(Math.random() * 100);
var userNumber = 0;

function compareNumbers(computer, user) {
  user > computer ? alert("Smaller") : user < computer ? alert("Greater") : user == computer ? alert("Bravo!") : alert("Please enter a numerical value");
}

for (var i = 0; i < 10; i++) {
  userNumber = Number(prompt("Guess the computer chosen number (beetween 0 and 100)"));
  compareNumbers(computerNumber, userNumber);
  userNumber == computerNumber ? i = 10 : false;
}

userNumber != computerNumber ? alert("Game Over (10 attempts max)") : false;