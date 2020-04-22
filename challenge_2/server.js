/* The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
You may also assume that child records in the JSON will always be in a property called `children`. */

const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable')
const cors = require('cors');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(port, () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
});

app.post('/convert_file', (req, res) => {

  res.send("Feature not avaialble yet...");
});

app.post('/convert', (req, res) => {
  console.log(`POST/convert request recieved`);
  var keys = getAllKeys(req.body);
  var output = parseJSON(req.body, keys);
  res.send(output);
});


var getAllKeys = function (obj) {
  let keys = new Set()

  for (let key of Object.keys(obj)) {
    if (key !== 'children') {
      keys.add(key);
    }
  }
  for (kid of obj.children)
    getAllKeys(kid).forEach(key => keys.add(key));

  return Array.from(keys);
}

var parseJSON = function (obj, keys) {
  let output  = '';
  for (let key of keys) {
    output += (obj[key] || "") + ","
  }
  output = output.slice(0, output.length - 1) + "\n";
  for (kid of obj.children) {
    output += parseJSON(kid, keys);
  }
  return output;
}

