
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var userGuess = document.onkeyup;
var compGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function (event) {
  
  userGuess = event.key;
  guessesMade.push(userGuess);

  if (compGuess == userGuess) {
    wins++;
    guessesLeft = 10;
    guessesMade = [];
  }
  
  if (compGuess != userGuess) {
    guessesLeft--;
    
  }

  if (guessesLeft == 0) {
    losses++;
    guessesLeft = 10;
    guessesMade = [];
  }

  var html =
    '<center><h1 color: red>The Psychic Game</h1></center>' +
    '<center><h3>Guess what letter I am thinking of<h3></center>' +
    '<center><p>Wins: ' + wins + '</p></center>' +
    '<center><p>Losses: ' + losses + '</p></center>' +
    '<center><p>Guesses Left: ' + guessesLeft + '</p></center>' +
    '<center><p>Your Guesses: ' + guessesMade + '</p></center>';
document.getElementById("game").innerHTML = html;
}
