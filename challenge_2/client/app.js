const $FORM = document.getElementById('request');

$FORM.addEventListener('submit', (event) => {
  event.preventDefault(); //prevent default action

  var url = $FORM.getAttribute("action");
  var method = $FORM.getAttribute("method");
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