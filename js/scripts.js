// business logic
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}


// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const sum = add(number1, number2);
const difference = subtract(number1, number2);
const product = multiply(number1, number2);
const quotient = divide(number1, number2);

const resultMessage = number1 + " + " + number2 + " = " + sum + " , " +
    number1 + " - " + number2 + " = " + difference + " , " +
    number1 + " * " + number2 + " = " + product + " , " +
    number1 + " / " + number2 + " = " + quotient
//const resultMessage = "The number:" + " " + (add(number1, number2)) + " is the sum!" +
//  "The number: " + (subtract(number1, number2)) + " is the difference!" +
//   "The number: " + (multiply(number1, number2)) + " is the product!" +
//    "The number: " + (divide(number1, number2)) + " is the quotient";


//window.alert(("The number:") + (" ") + (add(number1, number2)) + (" is the sum!"));
//window.alert(("The number: ") + (subtract(number1, number2)) + (" is the difference!"));
//window.alert(("The number: ") + (multiply(number1, number2)) + (" is the product!"));
//window.alert(("The number: ") + (divide(number1, number2)) + (" is the quotient"));

window.alert(resultMessage)
