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
let firstNumberBoolean = false;
let secondNumber;
let operation = false;
let clearDisplay = false;
let equalized = false;
let theAnswer;


const equalsPressed = document.getElementById('equals');
equalsPressed.addEventListener('click', function() {
    if (equalized) {
        theAnswer = operate(theAnswer, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        console.log(theAnswer);
        console.log(typeof(theAnswer));
        clearDisplay = true;
    }
    else if (firstNumberBoolean && operation) {
        secondNumber = +currentDisplay.textContent;
        console.log(secondNumber);
        console.log(operate(firstNumber, secondNumber, operation) + ' is the answer');
        theAnswer = operate(firstNumber, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        equalized = true;
        clearDisplay = true;
    }
});

const pressedPlus = document.getElementById('plus');
pressedPlus.addEventListener('click', function() {
    firstNumber = +currentDisplay.textContent;
    firstNumberBoolean = true;
    console.log('firstNumber ' + firstNumber);
    operation = 'addition';
    clearDisplay = true;
    equalized = false;
});


const pressedMinus = document.getElementById('minus');
pressedMinus.addEventListener('click', function() {
    firstNumber = +currentDisplay.textContent;
    firstNumberBoolean = true;
    operation = 'subtraction';
    clearDisplay = true;
    equalized = false;
});





function operate(a,b,operation) {
    let answer = 'error';
    if (operation == "addition") {answer = addNumbers(a,b)};
    if (operation == "subtraction") {answer = subtractNumbers(a,b)};
    if (operation == "multiplication") {answer = multiplyNumbers(a,b)};
    if (operation == "division") {answer = divideNumbers(a,b)};
    /*if (answer > 99999999999) {
        return 'Too big'
    }*/
    return answer;
}


const pressedDecimal = document.getElementById('decimal');
pressedDecimal.addEventListener('click', function() {
    changeDisplay('.');
});

const pressedZero = document.getElementById('zero');
pressedZero.addEventListener('click', function() {
    changeDisplay(0);
    equalized = false;
});

const pressedOne = document.getElementById('one');
pressedOne.addEventListener('click', function() {
    changeDisplay(1);
    equalized = false;
});

const pressedTwo = document.getElementById('two');
pressedTwo.addEventListener('click', function() {
    changeDisplay(2);
    equalized = false;
});

const pressedThree = document.getElementById('three');
pressedThree.addEventListener('click', function() {
    changeDisplay(3);
    equalized = false;
});

const pressedFour = document.getElementById('four');
pressedFour.addEventListener('click', function() {
    changeDisplay(4);
    equalized = false;
});

const pressedFive = document.getElementById('five');
pressedFive.addEventListener('click', function() {
    changeDisplay(5);
    equalized = false;
});

const pressedSix = document.getElementById('six');
pressedSix.addEventListener('click', function() {
    changeDisplay(6);
    equalized = false;
});

const pressedSeven = document.getElementById('seven');
pressedSeven.addEventListener('click', function() {
    changeDisplay(7);
    equalized = false;
});

const pressedEight = document.getElementById('eight');
pressedEight.addEventListener('click', function() {
    changeDisplay(8);
    equalized = false;
});

const pressedNine = document.getElementById('nine');
pressedNine.addEventListener('click', function() {
    changeDisplay(9);
    equalized = false;
});

//Note: Total length of number cannot exceed 11 characters
let currentLength;

//Note: currentDisplay.textContent is a string
let currentDisplay = document.getElementById('display');


function changeDisplay(a) {
    if (a == '.' && currentDisplay.textContent == 'READY') {
        currentDisplay.textContent = '0.';
        currentLength = 2;

    } else if (a == '.' && clearDisplay) {
        currentDisplay.textContent = '0.';
        currentLength = 2;
        clearDisplay = false;

    } else if (a == '.' && currentDisplay.textContent == '0') {
        currentDisplay.textContent = '0.';
        currentLength = 2;
        clearDisplay = false;

    } else if (currentDisplay.textContent == 'READY' || clearDisplay || currentDisplay.textContent == '0') {
        currentDisplay.textContent = a;
        currentLength = 1;
        clearDisplay = false;

    } else if (a == 0 && currentDisplay.textContent[0] == '0' && !(currentDisplay.textContent).includes('.')) {
        console.log('does nothing');

    } else if (a == '.' && !(currentDisplay.textContent).includes('.')) {
            currentDisplay.textContent += a;
            currentLength ++;
            console.log('yes');
            console.log(currentDisplay.textContent);
        
    } else if (a == '.' && (currentDisplay.textContent).includes('.')) {
            console.log("do nothing");

    } else if (currentLength < 11) {
        currentDisplay.textContent += a;
        currentLength += 1;
    }
};