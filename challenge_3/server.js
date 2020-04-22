const express = require ('express');
const app = express();
const PORT  = 3000;
//if you access http://127.0.0.1:3000/ from chrome it will serve index.html in /public
//without it, http://127.0.0.1:3000 would still send a GET request to the server but nothing will be rendered
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server is listening on http://127.0.0.1:${PORT}`));


app.get('/', (req, res) => {
  console.log("GET/ request received");
  res.end();
});

app.post('/', (req, res) => {
  console.log("POST/ request received");
  res.end();
});