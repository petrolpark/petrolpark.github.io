const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name')

let msg = ''

fetch('/msg/msg.txt')
  .then(response => response.text())
  .then((data) => {
    msg = data
  })

document.getElementById('msg').innerHTML = msg.replace('${name}', name)