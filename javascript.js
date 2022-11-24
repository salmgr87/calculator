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
//You'll probably need to create a function that rounds and deals with decimals
let decimals = 11;

function divideNumbers(a,b) {
    let n = a/b;
    n = n.toFixed(decimals);
    n = Number(n);
    return n;
}


let firstNumber;
let secondNumber;

const pressedPlus = document.getElementById('plus');
pressedPlus.addEventListener('click', function() {
    console.log('here');
    firstNumber = currentDisplay.textContent;
    console.log(operate(firstNumber,4,'addition'));

})


let operation;

function operate(a,b,operation) {
    let answer;
    if (operation == "addition") {answer = addNumbers(a,b)};
    if (operation == "subtraction") {answer = subtractNumbers(a,b)};
    if (operation == "multiplication") {answer = multiplyNumbers(a,b)};
    if (operation == "division") {answer = divideNumbers(a,b)};
    return answer;
}

const pressedDecimal = document.getElementById('decimal');
pressedDecimal.addEventListener('click', function() {
    changeDisplay('.');
});

const pressedZero = document.getElementById('zero');
pressedZero.addEventListener('click', function() {
    changeDisplay(0);
});

const pressedOne = document.getElementById('one');
pressedOne.addEventListener('click', function() {
    changeDisplay(1);
});

const pressedTwo = document.getElementById('two');
pressedTwo.addEventListener('click', function() {
    changeDisplay(2);
});



//Note: Total length of number cannot exceed 11 characters
let currentLength;

//Note: currentDisplay.textContent is a string
let currentDisplay = document.getElementById('display');


function changeDisplay(a) {
    if (a == '.' && currentDisplay.textContent == 'READY') {
        currentDisplay.textContent = '0.';
        currentLength = 2;
    }
    else if (a == '.' && !(currentDisplay.textContent).includes('.')) {
        currentDisplay.textContent += a;
        currentLength ++;
        console.log('yes');
        console.log(currentDisplay.textContent);
    
    } else if (a == '.' && (currentDisplay.textContent).includes('.')) {
        console.log("do nothing");
    } else if (currentDisplay.textContent =='READY' || currentDisplay.textContent == '0') {
        currentDisplay.textContent = a;
        currentLength = 1;

    } else if (currentLength < 11) {
        currentDisplay.textContent += a;
        currentLength ++;
        
    }
}