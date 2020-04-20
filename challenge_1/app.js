// model
let game, winner, player, playerOne, playerTwo;
initalize();

function initalize () {
  game = [];
  winner = 'X';
  player = 'X';
  playerOne = {score: 0, name: prompt('Player one (X), please enter your name:', 'X')};
  playerTwo = {score: 0, name: prompt('Player two (O), please enter your name:', 'O')};
}

//view
const turn = document.getElementById('turn');
const score = document.getElementById('score');

//controller
resetBoard();
document.querySelectorAll('td').forEach(tableCell => {
  tableCell.addEventListener("click", (event) => {
    let cell = event.target;
    if (game[cell.id] === 'not played') {
      playCell(cell);
      togglePlayer();
      checkForVictory();
    }
  });
});

document.getElementById('reset').addEventListener("click", resetBoard);

function resetBoard (event) {
  for (var i = 1; i <= 9; i++) {
    game[i] = 'not played';
    document.getElementById(i).innerHTML = '';
    document.getElementById(i).style.color = 'gray';
  }

  player = winner;
  turn.style.color = 'gray';
  turn.innerHTML = winner === 'X' ? `${playerOne.name}, it's your turn!` : `${playerTwo.name}, it's your turn!`;
  score.innerHTML = `${playerOne.name} ${playerOne.score}:${playerTwo.score} ${playerTwo.name}`;
  document.getElementById('reset').blur();
}


togglePlayer = () => {
  if (player === 'X') {
    player = 'O';
    turn.innerHTML = `${playerTwo.name}, it's your turn!`;
  } else {
    player = 'X';
    turn.innerHTML = `${playerOne.name}, it's your turn!`;
  }
}

playCell = (cell) => {
  if (player === 'O') {
    game[cell.id] = 'O';
    cell.style.color = 'black';
  } else {
    game[cell.id] = 'X';
  }
  cell.innerHTML = player;
}
checkForVictory = () => {
  checkRows();
  checkColumns();
  checkDiagonals();
}

checkRows = () => {
  if (game[1] + game[2] + game[3] === 'XXX') declareVictory('X', 1, 2, 3);
  if (game[4] + game[5] + game[6] === 'XXX') declareVictory('X', 4, 5, 6);
  if (game[7] + game[8] + game[9] === 'XXX') declareVictory('X', 7, 8, 9);
  if (game[1] + game[2] + game[3] === 'OOO') declareVictory('O', 1, 2, 3);
  if (game[4] + game[5] + game[6] === 'OOO') declareVictory('O', 4, 5, 6);
  if (game[7] + game[8] + game[9] === 'OOO') declareVictory('O', 7, 8, 9);
}

checkColumns = () => {
  if (game[1] + game[4] + game[7] === 'XXX') declareVictory('X', 1, 4, 7);
  if (game[2] + game[5] + game[8] === 'XXX') declareVictory('X', 2, 5, 8);
  if (game[3] + game[6] + game[9] === 'XXX') declareVictory('X', 3, 6, 9);
  if (game[1] + game[4] + game[7] === 'OOO') declareVictory('O', 1, 4, 7);
  if (game[2] + game[5] + game[8] === 'OOO') declareVictory('O', 2, 5, 8);
  if (game[3] + game[6] + game[9] === 'OOO') declareVictory('O', 3, 6, 9);
}

checkDiagonals = () => {
  if (game[1] + game[5] + game[9] === 'XXX') declareVictory('X', 1, 5, 9);
  if (game[3] + game[5] + game[7] === 'XXX') declareVictory('X', 3, 5, 7);
  if (game[1] + game[5] + game[9] === 'OOO') declareVictory('O', 1, 5, 9);
  if (game[3] + game[5] + game[7] === 'OOO') declareVictory('O', 3, 5, 7);
}

declareVictory = (player, cell1, cell2, cell3) => {
  winner = player;
  if(winner === 'X') {
    turn.innerHTML = `${playerOne.name} won!`;
    playerOne.score++;
    //update score
  } else {
    turn.innerHTML = `${playerTwo.name} won!`;
    playerTwo.score++;
  }
  score.innerHTML = `${playerOne.name} ${playerOne.score}:${playerTwo.score} ${playerTwo.name}`;
  //turn.innerHTML = player === 'X' ? `${playerOne.name} won!` : `${playerTwo.name} won!`

  turn.style.color = 'red';
  document.getElementById(cell1).style.color = 'red';
  document.getElementById(cell2).style.color = 'red';
  document.getElementById(cell3).style.color = 'red';


  for (var i = 1; i <= 9; i++) {
    game[i] = 'game ended';
  }

  //winner === 'X' ? playerOne.score++ : playerTwo.score++;
}


