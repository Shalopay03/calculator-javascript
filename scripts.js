//basic operations functions

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//calls needed operation function
function operate(firstNumber, secondNumber, operator){
    if(operator==="+") return add(firstNumber, secondNumber,);
    if(operator==="-") return subtract(firstNumber, secondNumber,);
    if(operator==="*") return multiply(firstNumber, secondNumber,);
    if(operator==="/") return divide(firstNumber, secondNumber,);
    return "ERROR";
}

//basic variables
let firstNumber="";
let secondNumber="";
let operator = "";
let result="";
let currentNumber = "";
const calculatorButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const display = document.querySelector("#display");

//number buttons event listener
calculatorButtons.forEach((calcButton) => {
    calcButton.addEventListener('click', () => {
        currentNumber+=calcButton.value;
        display.textContent = currentNumber;
    });
});

//operator buttons event listener
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        firstNumber=currentNumber;
        currentNumber="";
        operator=operatorButton.value;
    });
});

equalButton.addEventListener('click', () => {
    secondNumber=currentNumber;
    result=operate(+firstNumber, +secondNumber, operator);
    display.textContent = result;
    firstNumber=result;
    secondNumber="";
    operator="";
});





