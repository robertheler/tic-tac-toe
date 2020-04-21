// model
let state = initalize();

function initalize () {
  let obj = {};
  obj.game = [];
  obj.winner = 'X';
  obj.player = 'X';
  obj.playerOne = {score: 0, name: prompt('Player one (X), please enter your name:', 'X') || 'X'};
  obj.playerTwo = {score: 0, name: prompt('Player two (O), please enter your name:', 'O') || 'O'};
  return obj
}

//view
const turn = document.getElementById('turn');
const score = document.getElementById('score');

//controller
resetBoard();
document.querySelectorAll('td').forEach(tableCell => {
  tableCell.addEventListener("click", (event) => {
    let cell = event.target;
    if (state.game[cell.id] === 'not played') {
      playCell(cell);
      togglePlayer();
      checkForVictory();
    }
  });
});

document.getElementById('reset').addEventListener("click", resetBoard);

function resetBoard (event) {
  for (var i = 1; i <= 9; i++) {
    state.game[i] = 'not played';
    document.getElementById(i).innerHTML = '';
    document.getElementById(i).style.color = 'gray';
  }

  state.player = state.winner;
  turn.style.color = 'gray';
  turn.innerHTML = state.winner === 'X' ? `${state.playerOne.name}, it's your turn!` : `${state.playerTwo.name}, it's your turn!`;
  score.innerHTML = `${state.playerOne.name}&nbsp&nbsp&nbsp&nbsp${state.playerOne.score}&nbsp:&nbsp${state.playerTwo.score}&nbsp&nbsp&nbsp&nbsp${state.playerTwo.name}`;
  document.getElementById('reset').blur();
}


togglePlayer = () => {
  if (state.player === 'X') {
    state.player = 'O';
    turn.innerHTML = `${state.playerTwo.name}, it's your turn!`;
  } else {
    state.player = 'X';
    turn.innerHTML = `${state.playerOne.name}, it's your turn!`;
  }
}

playCell = (cell) => {
  if (state.player === 'O') {
    state.game[cell.id] = 'O';
    cell.style.color = 'black';
  } else {
    state.game[cell.id] = 'X';
  }
  cell.innerHTML = state.player;
}
checkForVictory = () => {
  checkRows();
  checkColumns();
  checkDiagonals();
}

checkRows = () => {
  if (state.game[1] + state.game[2] + state.game[3] === 'XXX') declareVictory('X', 1, 2, 3);
  if (state.game[4] + state.game[5] + state.game[6] === 'XXX') declareVictory('X', 4, 5, 6);
  if (state.game[7] + state.game[8] + state.game[9] === 'XXX') declareVictory('X', 7, 8, 9);
  if (state.game[1] + state.game[2] + state.game[3] === 'OOO') declareVictory('O', 1, 2, 3);
  if (state.game[4] + state.game[5] + state.game[6] === 'OOO') declareVictory('O', 4, 5, 6);
  if (state.game[7] + state.game[8] + state.game[9] === 'OOO') declareVictory('O', 7, 8, 9);
}

checkColumns = () => {
  if (state.game[1] + state.game[4] + state.game[7] === 'XXX') declareVictory('X', 1, 4, 7);
  if (state.game[2] + state.game[5] + state.game[8] === 'XXX') declareVictory('X', 2, 5, 8);
  if (state.game[3] + state.game[6] + state.game[9] === 'XXX') declareVictory('X', 3, 6, 9);
  if (state.game[1] + state.game[4] + state.game[7] === 'OOO') declareVictory('O', 1, 4, 7);
  if (state.game[2] + state.game[5] + state.game[8] === 'OOO') declareVictory('O', 2, 5, 8);
  if (state.game[3] + state.game[6] + state.game[9] === 'OOO') declareVictory('O', 3, 6, 9);
}

checkDiagonals = () => {
  if (state.game[1] + state.game[5] + state.game[9] === 'XXX') declareVictory('X', 1, 5, 9);
  if (state.game[3] + state.game[5] + state.game[7] === 'XXX') declareVictory('X', 3, 5, 7);
  if (state.game[1] + state.game[5] + state.game[9] === 'OOO') declareVictory('O', 1, 5, 9);
  if (state.game[3] + state.game[5] + state.game[7] === 'OOO') declareVictory('O', 3, 5, 7);
}

declareVictory = (player, cell1, cell2, cell3) => {
  state.winner = player;
  if(state.winner === 'X') {
    turn.innerHTML = `${state.playerOne.name} won!`;
    state.playerOne.score++;
  } else {
    turn.innerHTML = `${state.playerTwo.name} won!`;
    state.playerTwo.score++;
  }
  score.innerHTML = `${state.playerOne.name}&nbsp&nbsp&nbsp&nbsp${state.playerOne.score}&nbsp:&nbsp${state.playerTwo.score}&nbsp&nbsp&nbsp&nbsp${state.playerTwo.name}`;

  turn.style.color = '#8b0000';
  document.getElementById(cell1).style.color = '#8b0000';
  document.getElementById(cell2).style.color = '#8b0000';
  document.getElementById(cell3).style.color = '#8b0000';


  for (var i = 1; i <= 9; i++) {
    state.game[i] = 'game ended';
  }
}


