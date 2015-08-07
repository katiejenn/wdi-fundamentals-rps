////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if(move === null){
      getInput();
    }
    return move;
}

function getComputerMove(move) {
    if(move === null){
      randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if((playerMove == "rock" && computerMove == "scissors") || (playerMove == "scissors" && computerMove == "paper") || (playerMove == "paper" && computerMove == "rock") )
    {
      winner = "player";
    }else if((computerMove == "rock" && playerMove == "scissors") || (computerMove == "scissors" && playerMove == "paper") || (computerMove == "paper" && playerMove == "rock"))
    {
      winner = "computer";
    }else
    {
      winner = "tie";
    }
    return winner;

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var numGames = 0;

    while (numGames < 5)
    {
      var move = null;
      var winner = getWinner(getPlayerMove(move), getComputerMove(move));
      if (winner === "player")
      {
        playerWins ++;
      }
      else if(winner === "computer")
      {
        computerWins ++;
      }
      numGames ++;
    }
    return [playerWins, computerWins];
}

function playToX(x)
{
  console.log("Let's play Rock, Paper, Scissors")
  var playerWins = 0;
  var computerWins = 0;
  var numGames = 0;

  while(numGames < x)
  {
    var move = null;
    var winner = getWinner(getPlayerMove(move), getComputerMove(move));
    if (winner === "player")
    {
      playerWins ++;
    }
    else if(winner === "computer")
    {
      computerWins ++;
    }
    numGames ++;
  }
  return [playerWins, computerWins];
}
