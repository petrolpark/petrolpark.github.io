const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name')

let msg = ''

async () => {
    msg = await fetch('/msg/msg.txt')
    document.getElementById('msg').innerHTML = msg.replace('${name}', name)
}

