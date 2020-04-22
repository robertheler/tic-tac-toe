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
  console.log(req.body);
  res.end();
});

app.get('/', (req, res) => {
  console.log("GET/ request received");
  res.end();
});

