// Get elements
let btnSend = document.getElementById('send');
let userName = document.getElementById('name');
let message = document.getElementById('message');
let output = document.getElementById('output');

window.Storage.data = []

btnSend.onclick = (e) => {
    e.preventDefault()
    // Check if NO data inserted
    if (!userName.value || !message.value) {
        return userName.style.outline = '1px solid red', message.style.outline = '1px solid red';
    }
    // Push entered data to Storage array
    window.Storage.data.push({
        usern: userName.value,
        mes: message.value
    })
    // Append user name and message to web page
    for (let i = window.Storage.data.length - 1; i == window.Storage.data.length - 1; i--) {
        output.insertAdjacentHTML('afterbegin', `
        <div class="outputWindow">
        <output id="outName">${window.Storage.data[i].usern}</output>
        <output id="outMessage">${window.Storage.data[i].mes}</output>
        </div>
        `)
    }
    // Clear inputs and autofocus on user name
    userName.value = '';
    message.value = '';
    userName.focus()
    if (userName.style.outlineColor == 'red')
        userName.style.outline = '0px', message.style.outline = '0px';
}