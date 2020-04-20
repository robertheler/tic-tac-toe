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
    cell.style.color = 'black';
  } else {
    game[cell.id] = 'X';
  }
  cell.innerHTML = player;
}
let checkForVictory = () => {
  console.log('Victory');
  //checkRows();
  //checkColumns();
}

document.querySelectorAll('td').forEach(tableCell => {
  tableCell.addEventListener("click", clickHandler)
});