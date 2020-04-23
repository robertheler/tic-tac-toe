const db = require('./database.js');
const express = require ('express');
const cors = require ('cors');
const app = express();
const PORT  = 3000;
//if you access http://127.0.0.1:3000/ from chrome it will serve index.html in /public
//without it, http://127.0.0.1:3000 would still send a GET request to the server but nothing will be rendered
//overrides the "/" get method in server.js
app.use(express.static('public'));
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( bodyParser.json() );

app.listen(PORT, () => console.log(`Server is listening on http://127.0.0.1:${PORT}`));

app.post('/order', (req, res) => {
  console.log("POST/ request received");
  let options = getOptions(req.body);

  let query = `insert into orders (name, email, password, line1, line2, city, state, zipcode, card, expiration, cvv, billing) values (? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? )`;

  db.connection.query(query, options, (err, result) => {
    if (err) {
      console.log('Database error!', err);
      res.status(500); //intrernal server error
    } else {
      console.log('Ordered added to the database!');
      res.end();
    }
  })
  //res.end();
});

app.get('/', (req, res) => {
  console.log("GET/ request received");
  res.end();
});

let getOptions = (order) => {
  let options = [];
  options.push(order.user.name);
  options.push(order.user.email);
  options.push(order.user.password);
  options.push(order.address.line1);
  options.push(order.address.line2);
  options.push(order.address.city);
  options.push(order.address.state);
  options.push(order.address.zipcode);
  options.push(order.payment.card);
  options.push(order.payment.expiration);
  options.push(order.payment.cvv);
  options.push(order.payment.billing);

  return options;
}