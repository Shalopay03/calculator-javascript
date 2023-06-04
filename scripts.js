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
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

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

//event listener for "=" button
equalButton.addEventListener('click', () => {
    secondNumber=currentNumber;
    result=operate(+firstNumber, +secondNumber, operator);
    display.textContent = result;
    currentNumber=result.toString();
    firstNumber="";
    secondNumber="";
    operator="";
});

//event listener for "clear" button
clearButton.addEventListener('click', () => {
    currentNumber="";
    firstNumber="";
    secondNumber="";
    operator="";
    display.textContent = "";
});

//event listener for "delete" button
deleteButton.addEventListener('click', () => {
    currentNumber=currentNumber.slice(0, -1);
    display.textContent=currentNumber;
});