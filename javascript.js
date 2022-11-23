function addNumbers(a,b) {
    return a + b;
}

function subtractNumbers(a,b) {
    return a - b;
}

function multiplyNumbers(a,b) {
    return a*b;
}

//Thinking about how to deal with the limited space of the calculator display
let decimals = 9;

function divideNumbers(a,b) {
    let n = a/b;
    n = n.toFixed(decimals);
    n = Number(n);
    return n;
}


function operate(a,b,operation) {
    let answer;
    if (operation == "addition") {answer = addNumbers(a,b)};
    if (operation == "subtraction") {answer = subtractNumbers(a,b)};
    if (operation == "multiplication") {answer = multiplyNumbers(a,b)};
    if (operation == "division") {answer = divideNumbers(a,b)};
    return answer;
}


console.log(operate(9,7,"addition"));
console.log(operate(9,7,"subtraction"));
console.log(operate(9,7,"multiplication"));
console.log(operate(9,7,"division"));