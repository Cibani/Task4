function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.' && value !== '/') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        if (result === Infinity || isNaN(result)) {
            display.innerText = 'Error';
        } else {
            display.innerText = result;
        }
    } catch (e) {
        display.innerText = 'Error';
    }
}
