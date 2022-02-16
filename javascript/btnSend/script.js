let btnSend = document.querySelector('button');
let message = document.querySelector('p');

btnSend.addEventListener('click', () => {
    btnSend.innerText = 'Sending...';

    setTimeout(() => {
        btnSend.style.display = "none";
        message.innerText = 'Message Sent';
    }, 1000);
});