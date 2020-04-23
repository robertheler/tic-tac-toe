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
    board[5][3] = 1;
    this.state = {board: board, player: 1};
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(row, column) {
    this.placePiece(column);
    //check victory
  }

  placePiece(column) {
    for (let row = 5; row >= 0; row--) {
      if(this.state.board[row][column] === 0) {
        this.state.board[row][column] = this.state.player;
        this.render();
        console.log(`Player ${this.state.player} placed at position ${row}-${column}`);
        console.log(this.state.board);
        this.togglePlayer();
        break;
      }
    }
  }

  togglePlayer() {
    if (this.state.player === 1) {
      this.setState({player: 2})
      //this.state.player = 2;
    } else {
      this.setState({player: 1})
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
    //this.state = {index: props.column};
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event){
    console.log(event.currentTarget.getAttribute('column'));
  }
  handleClick(event) {
    let row = event.currentTarget.getAttribute('row');
    let column = event.currentTarget.getAttribute('column');
    this.props.onClick(row, column)
  }
  render() {
    switch (this.props.occupancy) {
      case 1:
        return (<div className="redCircle" onClick={this.handleClick} onMouseEnter={this.handleHover} row={this.props.row} column ={this.props.column}></div>);
      case 2:
        return (<div className="yellowCircle" onClick={this.handleClick} onMouseEnter={this.handleHover} row={this.props.row} column ={this.props.column}></div>)
      default:
        return (<div className="emptyCircle" onClick={this.handleClick} onMouseEnter={this.handleHover} row={this.props.row} column ={this.props.column}></div>)
    }

  }
}