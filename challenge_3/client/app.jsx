//console.log('App.js sourced');



class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Robby', email: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(event.currentTarget);

    event.preventDefault();
  }

  render() {
    console.log("rendered");
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Name:
          <input id ="name" type="text" defaultValue={this.state.name} />
        </div>
        <div>
          E-mail:
          <input id ="email" type="text" defaultValue={this.state.email} />
        </div>
        <div>
          Password:
          <input id="password" type="password" defaultValue={this.state.password} />
        </div>
        <input type="submit" value="Next" />
      </form>
    );
  }
}


let a = "message";
var App = () => (<F1 />);


//typically in a seperate index.js file
ReactDOM.render(<App />, document.getElementById('app'));