//console.log('App.js sourced');

class Purchase extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log('F3 props', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    fetch('http://127.0.0.1:3000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props),
    })
    .then(() => {
      window.alert('Ordered Submitted!');
      ReactDOM.render(<StartCheckout />, document.getElementById('app'));
    })
    .catch((error) => {
      window.alert('Error with your order', error);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Name: {this.props.user.name}</div>
        <div>Email: {this.props.user.email}</div>
        <div>Password: {this.props.user.passowrd}</div>
        <div>Shipping Address Line 1: {this.props.address.line1}</div>
        <div>Shipping Address Line 2: {this.props.address.line1}</div>
        <div>City: {this.props.address.city}</div>
        <div>State: {this.props.address.state}</div>
        <div>Credit Card: {this.props.payment.card}</div>
        <div>Expiration Date: {this.props.payment.card}</div>
        <div>CVV: {this.props.payment.cvv}</div>
        <div>Billing Zip Code: {this.props.payment.billing}</div>
        <input type="submit" value="Confirm order!" />
      </form>
    );
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {card: '', expiration: '', cvv: '', billing: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log('F3 props', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    let card = document.getElementById('card').value;
    let expiration = document.getElementById('expiration').value;
    let cvv = document.getElementById('cvv').value;
    let billing = document.getElementById('billing').value;

    this.state = {card, expiration, cvv, billing};
    //console.log('F3 state', this.state);
    ReactDOM.render(<Purchase user={this.props.user} address={this.props.address} payment={this.state}/>, document.getElementById('app'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Credit Card:
          <input id ="card" type="text" defaultValue={this.state.card} />
        </div>
        <div>
          Expiration Date:
          <input id ="expiration" type="text" defaultValue={this.state.expiration} />
        </div>
        <div>
          CVV:
          <input id="cvv" type="text" defaultValue={this.state.cvv} />
        </div>
        <div>
          Billing Zip Code:
          <input id="billing" type="text" defaultValue={this.state.billing} />
        </div>
        <input type="submit" value="Review Order" />
      </form>
    );
  }

}
class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {line1: '', line2: '', city: '', state: '', zipcode: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log('F2 props', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    let line1 = document.getElementById('line1').value;
    let line2 = document.getElementById('line2').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipcode = document.getElementById('zipcode').value;
    this.state = {line1, line2, city, state, zipcode};
    //console.log('F2 state', this.state);
    ReactDOM.render(<F3 user={this.props.user} address={this.state}/>, document.getElementById('app'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Street address (line 1):
          <input id ="line1" type="text" defaultValue={this.state.line1} />
        </div>
        <div>
        Street address (line 2):
          <input id ="line2" type="text" defaultValue={this.state.line2} />
        </div>
        <div>
        City:
          <input id="city" type="text" defaultValue={this.state.city} />
        </div>
        <div>
        State:
          <input id="state" type="text" defaultValue={this.state.state} />
        </div>
        <div>
        Zip Code:
          <input id="zipcode" type="text" defaultValue={this.state.zipcode} />
        </div>
        <input type="submit" value="Next" />
      </form>
    );
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Robby', email: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    this.state = {name, email, password};

    ReactDOM.render(<F2 user={this.state}/>, document.getElementById('app'));

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
        <input type="submit" value="Continue to Address" />
      </form>
    );
  }
}

let StartCheckout = () => (
  <form onSubmit={continueToF1}>
    <input type="submit" value="Start Checkout" />
  </form>
)

let continueToF1 = (event) => {
  event.preventDefault();
  ReactDOM.render(<F1 />, document.getElementById('app'));
}
//typically in a seperate index.js file
ReactDOM.render(<StartCheckout />, document.getElementById('app'));