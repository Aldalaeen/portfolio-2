//Initializing Global Vars
var wins = 0;
var losses = 0;
var score = 0;

//Gem Vars
var purple = 0;
var green = 0;
var red = 0;
var blue = 0;
var maxScore = 0;

//Random Number between Min and Max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////Begin Game Logic//////////////
$(document).ready(function() {

  maxScore = getRandomInt(19, 120);
  //console.log("Max Score", maxScore);
  $("#scoreToMatch").text("Your total score should not exceed: " + maxScore);

  function resetGame() {
    score = 0;
    $("#score").text("Score So Far: " + score);
    maxScore = getRandomInt(19, 120);
    console.log("Max Score", maxScore);
    $("#scoreToMatch").text("Your total score should not exceed: " + maxScore);
    purple = 0;
    green = 0;
    red = 0;
    blue = 0;
  } //End resetGame fct
  function checkWin() {
    if (score === maxScore) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (score > maxScore) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
  } //End checkWin fct

  //Click Event for Gem 0
  $("#gem0").on("click", function() {
    if (purple === 0) {
      purple = getRandomInt(1, 12);
      console.log(purple);
    }
    score += purple;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });
  
  //Click Event for Gem 1
  $("#gem1").on("click", function() {
    if (green === 0) {
      green = getRandomInt(1, 12);
      console.log(green);
    }
    score += green;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });

  //Click Event for Gem 2
  $("#gem2").on("click", function() {
    if (red === 0) {
      red = getRandomInt(1, 12);
      console.log(red);
    }
    score += red;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });
  //Click Event for Gem 3
  $("#gem3").on("click", function() {
    if (blue === 0) {
      blue = getRandomInt(1, 12);
      console.log(blue);
    }
    score += blue;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });

}); //End Ready Fct
