const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultDisplay = document.getElementById('result');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Cannont divided by zero';
    }
    return a / b;
}

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Result = Error: Invalid input';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Error: Invalid operation';
    }

    if (typeof result === 'number') {
        result = result.toFixed(2); // Round to 2 decimal places
    }
    resultDisplay.textContent = `Result = ${result}`;
});
