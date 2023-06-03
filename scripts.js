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
let firstNumber=10;
let secondNumber=5;
let operator = '+';

//test
console.log(operate(firstNumber, secondNumber, operator));