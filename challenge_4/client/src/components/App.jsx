export const App = () => (<div><Board /></div>);

class Board extends React.Component {
  constructor(props) {
    super(props);
    // red player = 1, yellow player = 2, 0 = empty
    //let row = new Array(7).fill(0);
    //let board = new Array(6).fill(row);
    var board = [];
    for(var i=0; i<6; i++) {
      board[i] = [];
        for(var j=0; j<7; j++) {
          board[i][j] = 0;
      }
    }
    //board[5][3] = 1;
    this.state = {board: board, player: 1, score: {first: 0, second: 0}};
    this.reset();
    this.handleClick = this.handleClick.bind(this);

    document.getElementById('button').addEventListener('click', (event) => {

      this.reset();
    });

  }

  handleClick(row, column) {
    let actualRow = this.placePiece(column);
    //console.log(actualRow);
    if (actualRow >= 0) {
      this.checkVictory(actualRow, column);
    }
    this.togglePlayer();
  }


  // return indeces of winning columns
  // false otherwise
  checkRow(row, column) {
    let board = this.state.board;
    let player = this.state.player;

    if (board[row][column-3] * board[row][column-2] * board[row][column-1] * board[row][column] === player**4)
      return [[row, column-3], [row, column-2], [row, column-1], [row, column]];

    if (board[row][column-2] * board[row][column-1] * board[row][column] * board[row][column+1] === player**4)
      return [[row, column-2], [row, column-1], [row, column], [row, column+1]];

    if (board[row][column-1] * board[row][column] * board[row][column+1] * board[row][column+2] === player**4)
      return [[row, column-1], [row, column], [row, column+1], [row, column+2]];

    if (board[row][column] * board[row][column+1] * board[row][column+2] * board[row][column+3] === player**4)
      return [[row, column], [row, column+1], [row, column+2], [row, column+3]];

    return false;
  }

  checkColumn(row, column) {
    let board = this.state.board;
    let player = this.state.player;

    if ((board[row-3]) && (board[row]) && (board[row-3][column] * board[row-2][column] * board[row-1][column] * board[row][column] === player**4))
      return [[row-3, column], [row-2, column], [row-1, column], [row, column]];

    if ((board[row-2]) && (board[row+1]) && (board[row-2][column] * board[row-1][column] * board[row][column] * board[row+1][column] === player**4))
      return [[row-2, column], [row-1, column], [row, column], [row+1, column]];

    if ((board[row-1]) && (board[row+2]) && (board[row-1][column] * board[row][column] * board[row+1][column] * board[row+2][column] === player**4))
      return [[row-1, column], [row, column], [row+1, column], [row+2, column]];

    if ((board[row]) && (board[row+3])&& (board[row][column] * board[row+1][column] * board[row+2][column] * board[row+3][column] === player**4))
      return [[row, column], [row+1, column], [row+2, column], [row+3, column]];

    return false;
  }

  checkMajorDiagonal(row, column) {
    let board = this.state.board;
    let player = this.state.player;
    //console.log(board);
    //major diagonal
    if ((board[row-3]) && (board[row]) && (board[row-3][column-3] * board[row-2][column-2] * board[row-1][column-1] * board[row][column] === player**4))
      return [[row-3, column-3], [row-2, column-2], [row-1, column-1], [row, column]];

    if ((board[row-2]) && (board[row+1]) && (board[row-2][column-2] * board[row-1][column-1] * board[row][column] * board[row+1][column+1] === player**4))
      return [[row-2, column-2], [row-1, column-1], [row, column], [row+1, column+1]];

    if ((board[row-1]) && (board[row+2]) && (board[row-1][column-1] * board[row][column] * board[row+1][column+1] * board[row+2][column+2] === player**4))
      return [[row-1, column-1], [row, column], [row+1, column+1], [row+2, column+2]];

    if ((board[row]) && (board[row+3])&& (board[row][column] * board[row+1][column+1] * board[row+2][column+2] * board[row+3][column+3] === player**4))
      return [[row, column], [row+1, column+1], [row+2, column+2], [row+3, column+3]];

    return false;
  }

  checkMinorDiagonal(row, column) {
    let board = this.state.board;
    let player = this.state.player;

    if ((board[row-3]) && (board[row]) && (board[row-3][column+3] * board[row-2][column+2] * board[row-1][column+1] * board[row][column] === player**4))
      return [[row-3, column+3], [row-2, column+2], [row-1, column+1], [row, column]];

    if ((board[row-2]) && (board[row+1]) && (board[row-2][column+2] * board[row-1][column+1] * board[row][column] * board[row+1][column-1] === player**4))
      return [[row-2, column+2], [row-1, column+1], [row, column], [row+1, column-1]];

    if ((board[row-1]) && (board[row+2]) && (board[row-1][column+1] * board[row][column] * board[row+1][column-1] * board[row+2][column-2] === player**4))
      return [[row-1, column+1], [row, column], [row+1, column-1], [row+2, column-2]];

    if ((board[row]) && (board[row+3])&& (board[row][column] * board[row+1][column-1] * board[row+2][column-2] * board[row+3][column-3] === player**4))
      return [[row, column], [row+1, column-1], [row+2, column-2], [row+3, column-3]];

    return false;
  }

  checkVictory(row, column) {
    if(this.checkRow(row, Number(column))) {
      this.declareVictory(this.checkRow(row, Number(column)));
    }

    if(this.checkColumn(row, Number(column))) {
      this.declareVictory(this.checkColumn(row, Number(column)));
    }

    if(this.checkMajorDiagonal(row, Number(column))) {
      this.declareVictory(this.checkMajorDiagonal(row, Number(column)));
    }

    if(this.checkMinorDiagonal(row, Number(column))) {
      this.declareVictory(this.checkMinorDiagonal(row, Number(column)));
    }
  }


  //coordinates of the winning peices in [row, col] tuples
  declareVictory(coordinates) {
    //console.log(coordinates);
    //alert('victtry!');
    let shadow;
    let player = this.state.player;

    if (player === 1) {
      this.state.score.first++;
          shadow = `inset 10px 10px 10px #831f0c,
                    inset -10px -10px 10px #b92b10,
                    5px 5px 10px #831f0c,
                    -5px -5px 10px #b92b10`
    } else {
      this.state.score.second++;
      shadow = `inset 10px 10px 10px  #b39700,
                inset -10px -10px 10px #fdd500,
                5px 5px 10px #b39700,
                -5px -5px 10px #fdd500`
    }
    for (let coordinate of coordinates) {
      let location = '' + coordinate[0] + coordinate[1];
      console.log(location);
      let piece = document.querySelector(`[location="${location}"]`);

      //piece.style.boxShadow = shadow;
      //piece.style.border = '2px solid black';
    }
    document.getElementById('first').innerHTML = `Player 1: ${this.state.score.first}`;
    document.getElementById('second').innerHTML = `Player 2: ${this.state.score.second}`;
    document.getElementById('turn').innerHTML = `Player ${player} won! Play again!`;
    //alert(`Player ${player} won! Click okay to play again! `);
    //console.log('this.state.score', this.state.score);
    document.getElementById('button').style.opacity = 1;
    document.getElementById('app').style.pointerEvents = 'none';
  }



  reset() {
    var newBoard = [];
    for(var i=0; i<6; i++) {
      newBoard[i] = [];
      for(var j=0; j<7; j++) {
        newBoard[i][j] = 0;
      }
    }
    this.setState({board: newBoard});
    this.setState({player: 1});
    document.getElementById('button').style.opacity = 0;
    document.getElementById('turn').innerHTML = `Player 1 you're up!`;
    document.getElementById('app').style.pointerEvents = 'auto';
  }
  //returns row where piece placed
  placePiece(column) {
    for (let row = 5; row >= 0; row--) {
      if(this.state.board[row][column] === 0) {
        this.state.board[row][column] = this.state.player;
        return row;
      }
    }

    return false;
  }

  togglePlayer() {
    if (this.state.player === 1) {
      this.setState({player: 2});
      document.getElementById('turn').innerHTML = `Player 2 you're up!`;
      //this.state.player = 2;
    } else {
      this.setState({player: 1});
      document.getElementById('turn').innerHTML = `Player 1 you're up!`;
    }
  }

  render() {
    var circles = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j ++) {
        circles.push(<Circle
          row={i}
          column={j}
          occupancy={this.state.board[i][j]}
          onClick={this.handleClick}/>);
      }
    }

    return (<div className="board">{circles}</div>)
  }
}

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleUnHover = this.handleUnHover.bind(this);
  }

  handleUnHover(event){
    let column = event.currentTarget.getAttribute('column');
    let wholeColumn = document.querySelectorAll(`[column="${column}"]`);
    wholeColumn.forEach(circle => circle.style.border ="");
  }

  handleHover(event){
    let column = event.currentTarget.getAttribute('column');
    let wholeColumn = document.querySelectorAll(`[column="${column}"]`);
    wholeColumn.forEach(circle => circle.style.border ="1px solid gray");
  }

  handleClick(event) {
    let row = event.currentTarget.getAttribute('row');
    let column = event.currentTarget.getAttribute('column');
    this.props.onClick(row, column)
  }

  render() {
    return (<div
      id={`color${this.props.occupancy}`}
      onClick={this.handleClick}
      //onMouseEnter={this.handleHover}
      //onMouseLeave={this.handleUnHover}
      row={this.props.row}
      column={this.props.column}
      location={`${this.props.row}${this.props.column}`}></div>);

  }
}