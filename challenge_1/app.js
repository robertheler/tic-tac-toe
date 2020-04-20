const header = document.getElementById('header');
let game = [];
for (var i = 1; i <= 9; i++) {
  game[i] = 'not played';
}
let player = 'X';
function clickHandler(event) {
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
    header.innerHTML = `Player O, it's your turn!`
  } else {
    player = 'X';
    header.innerHTML = `Player X, it's your turn!`
  }
}

let playCell = (cell) => {
  if (player === 'O') {
    game[cell.id] = 'O';
    cell.Cr = 'black';
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
  header.style.color = 'red'
  header.innerHTML = `Player ${player} won!`


  document.getElementById(cell1).style.color = 'red';
  document.getElementById(cell2).style.color = 'red';
  document.getElementById(cell3).style.color = 'red';


  for (var i = 1; i <= 9; i++) {
    game[i] = 'game ended';
  }

}

document.querySelectorAll('td').forEach(tableCell => {
  tableCell.addEventListener("click", clickHandler)
});