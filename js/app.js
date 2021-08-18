function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('got 3 dgt and calling again pin');
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}



document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});



function verifyPin() {
    // console.log('going to verify');
    const pin = document.getElementById('display-pin').value;
    const TypedNumber = document.getElementById('typed-numbers').value;


    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-failed');
    if (pin == TypedNumber) {
        // console.log('matched');
        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    } else {
        // console.log('upps');
        failNotification.style.display = 'block';
        successNotification.style.display = 'none';
    }
}