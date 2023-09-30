/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}


function addNumbers() {
    
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let result = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = result;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
};


const subtractNumbers = function () {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
    const result = subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#difference').value = result;
};
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);
    const result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
function divide(dividend, divisor) {
    return dividend / divisor;
}
const divideNumbers = () => {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
    const result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
};
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray.join(', ');


/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function (number) {
    return number % 2 === 1;
});
document.querySelector('#odds').textContent = oddNumbers.join(', ');
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(function (number) {
    return number % 2 === 0;
});

document.querySelector('#evens').textContent = evenNumbers.join(', ');
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(function (number) {
    return number * 2;
});

document.querySelector('#multiplied').textContent = multipliedArray.join(', ');
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(function (number) {
    return number * 2;
}).reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
