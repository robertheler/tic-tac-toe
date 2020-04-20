const turn = document.getElementById('turn');
const score = document.getElementById('score');
let game = [];
let player;
let winner = 'X';
let tally = {X: 0, O: 0}

function clickCellHandler(event) {
  let cell = event.target;
  if (game[cell.id] === 'not played') {
    playCell(cell);
    togglePlayer();
    checkForVictory();
  }
}

let togglePlayer = () => {
  if (player === 'X') {
    player = 'O';
    turn.innerHTML = `Player O, it's your turn!`
  } else {
    player = 'X';
    turn.innerHTML = `Player X, it's your turn!`
  }
}

let playCell = (cell) => {
  if (player === 'O') {
    game[cell.id] = 'O';
    cell.style.color = 'black';
  } else {
    game[cell.id] = 'X';
  }
  cell.innerHTML = player;
}
let checkForVictory = () => {
  checkRows();
  checkColumns();
  checkDiagonals();
}

let checkRows = () => {
  if (game[1] + game[2] + game[3] === 'XXX') declareVictory('X', 1, 2, 3);
  if (game[4] + game[5] + game[6] === 'XXX') declareVictory('X', 4, 5, 6);
  if (game[7] + game[8] + game[9] === 'XXX') declareVictory('X', 7, 8, 9);
  if (game[1] + game[2] + game[3] === 'OOO') declareVictory('O', 1, 2, 3);
  if (game[4] + game[5] + game[6] === 'OOO') declareVictory('O', 4, 5, 6);
  if (game[7] + game[8] + game[9] === 'OOO') declareVictory('O', 7, 8, 9);
}

let checkColumns = () => {
  if (game[1] + game[4] + game[7] === 'XXX') declareVictory('X', 1, 4, 7);
  if (game[2] + game[5] + game[8] === 'XXX') declareVictory('X', 2, 5, 8);
  if (game[3] + game[6] + game[9] === 'XXX') declareVictory('X', 3, 6, 9);
  if (game[1] + game[4] + game[7] === 'OOO') declareVictory('O', 1, 4, 7);
  if (game[2] + game[5] + game[8] === 'OOO') declareVictory('O', 2, 5, 8);
  if (game[3] + game[6] + game[9] === 'OOO') declareVictory('O', 3, 6, 9);
}

let checkDiagonals = () => {
  if (game[1] + game[5] + game[9] === 'XXX') declareVictory('X', 1, 5, 9);
  if (game[3] + game[5] + game[7] === 'XXX') declareVictory('X', 3, 5, 7);
  if (game[1] + game[5] + game[9] === 'OOO') declareVictory('O', 1, 5, 9);
  if (game[3] + game[5] + game[7] === 'OOO') declareVictory('O', 3, 5, 7);
}

let declareVictory = (player, cell1, cell2, cell3) => {
  turn.style.color = 'red'
  turn.innerHTML = `Player ${player} won!`


  document.getElementById(cell1).style.color = 'red';
  document.getElementById(cell2).style.color = 'red';
  document.getElementById(cell3).style.color = 'red';


  for (var i = 1; i <= 9; i++) {
    game[i] = 'game ended';
  }

  winner = player;
  tally[winner]++;
}

document.querySelectorAll('td').forEach(tableCell => {
  tableCell.addEventListener("click", clickCellHandler)
});

let resetBoard = (event) => {
  for (var i = 1; i <= 9; i++) {
    game[i] = 'not played';
    document.getElementById(i).innerHTML = '';
    document.getElementById(i).style.color = 'gray';
  }

  player = winner;
  turn.style.color = 'gray'
  turn.innerHTML = `Player ${player}, it's your turn!`
  score.innerHTML = `X\t${tally.X}:${tally.O}\tO`
}

document.getElementById('reset').addEventListener("click", resetBoard);
resetBoard();