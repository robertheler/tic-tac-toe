export const App = () => (<div><Board /></div>);

class Board extends React.Component {
  constructor(props) {
    super(props);
    let row = new Array(7).fill(0);
    let baord = new Array(6).fill(row);

    this.state = {board: baord};

    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    var circles = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j ++) {
        circles.push(<Circle row={i} column={j} palyer={this.state.board[i][j]}/>);
      }
    }

    return (<div className ="board">{circles}</div>)
  }
}

class Circle extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {index: props.column};
  }
  render() {
    return (<div className="circle" id={`_${this.props.row}${this.props.column}`}></div>)
  }
}