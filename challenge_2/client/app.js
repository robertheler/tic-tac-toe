document.getElementById('textRequest').addEventListener('submit', (event) => {
  event.preventDefault(); //prevent default action

  var url = document.getElementById('textRequest').getAttribute("action");
  var method = document.getElementById('textRequest').getAttribute("method");
  var input = document.getElementById('textarea').value;

  $.post({
    url : url,
    type : method,
    data : input,
    contentType: 'application/json',
    success: data => {
      //document.getElementById('output').innerHTML = JSON.stringify(data);
      document.getElementById('output').innerHTML = (data);
    }
  });
})

var inputFile = document.getElementById('fileRequest');
document.getElementById('fileRequest').addEventListener('submit', (event) => {
  event.preventDefault(); //prevent default action

  var form = $('#fileUpload')[0]; // input element of type file
  if (form.files.length === 0) {
    console.log('No file selected!');
    return;
  }
  // if (file.type !== 'image/jpeg') {
  //   console.log('Not a jpg file!');
  //   return;
  // }
  var file = form.files[0];
  var formData = new FormData();
  formData.append('file', file);

  $.ajax({
    type: 'POST',
    data: formData,
    url: document.getElementById('fileRequest').getAttribute("action"),
    cache: false,
    contentType: false,
    processData: false,
    success: (data) => {
      // reload the page
      document.getElementById('output').innerHTML = (data);
    }
  });

});

const sample = `{
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "sales": 7500000,
    "children": []
  }
]
}`

var input = document.getElementById('textarea').value = sample;