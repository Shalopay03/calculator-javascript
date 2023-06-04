//basic operations functions

function add(a, b){
    return fixDecimal(a + b);
}

function subtract(a, b){
    return fixDecimal(a - b);
}

function multiply(a, b){
    return fixDecimal(a * b);
}

function divide(a, b){
    return fixDecimal(a/b);
}

//function that takes number and fixes it to 5 numbers if it's decimal
function fixDecimal(number){

    //if it's integer just return it
    if(Number.isInteger(number)) return number;

    //convert number to string with 5 digits after dot
    numberString=number.toFixed(5).toString();

    //if stumbling across non zero number return value, else remove number
    for(let i=numberString.length-1; numberString[i]!=="."; i--)
    {
        if(numberString[i]!=='0') return numberString;
        numberString=numberString.slice(0, -1);
    }
}

//calls needed operation function
function operate(firstNumber, secondNumber, operator){
    if(operator==="+") return add(firstNumber, secondNumber);
    if(operator==="-") return subtract(firstNumber, secondNumber);
    if(operator==="*") return multiply(firstNumber, secondNumber);
    //preventing dividing by 0
    if(operator==="/" && secondNumber===0) return "ERROR";
    if(operator==="/") return divide(firstNumber, secondNumber);
    return "ERROR";
}

//basic variables
let firstNumber="";
let secondNumber="";
let operator = "";
let result="";
let currentNumber = "";
let secondPartOfCalculation = false;
const calculatorButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

//number buttons event listener
calculatorButtons.forEach((calcButton) => {
    calcButton.addEventListener('click', () => {

        //preventing decimal "." from appearing several times in one number
        if(currentNumber.indexOf(".") > -1 && calcButton.value===".")
        {
             return;
        }

        currentNumber+=calcButton.value;
        display.textContent = currentNumber;
    });
});

//operator buttons event listener
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {

        if(!secondPartOfCalculation)
        {
            firstNumber=currentNumber;
            currentNumber="";
            operator=operatorButton.value;
            secondPartOfCalculation = true;
        }
        else{
            secondNumber=currentNumber;
            result=operate(+firstNumber, +secondNumber, operator);
            display.textContent = result;
            operator=operatorButton.value;
            currentNumber="";
            firstNumber=result.toString();
        }


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
    secondPartOfCalculation = false;
});

//event listener for "clear" button
clearButton.addEventListener('click', () => {
    currentNumber="";
    firstNumber="";
    secondNumber="";
    operator="";
    display.textContent = "";
    secondPartOfCalculation = false;
});

//event listener for "delete" button
deleteButton.addEventListener('click', () => {
    currentNumber=currentNumber.slice(0, -1);
    display.textContent=currentNumber;
});