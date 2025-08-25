document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = Number("01741827527");
    const pinNumber = 1234;
    const inputNumber = parseInt(document.getElementById('input-number').value)
    const inputPin = parseInt(document.getElementById('input-Pin').value);
    if (inputNumber === mobileNumber && inputPin === pinNumber) {
        window.location.href = './home.html'
    } else if (inputNumber !== mobileNumber) {
        alert('incorret number, please enter the corret number');
    } else if (inputPin !== pinNumber) {
        alert('incorret pin, please enter the corret pin');
    } else {
        alert('please enter the valid number and pin number')
    }
});