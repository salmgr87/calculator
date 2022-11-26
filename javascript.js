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
    if (currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH') {
        console.log("does nothing");
    }
    else if (equalized) {
        theAnswer = operate(theAnswer, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        console.log(theAnswer);
        console.log(typeof(theAnswer));
        clearDisplay = true;
    }
    else if (firstNumberBoolean && operation) {
        secondNumber = +currentDisplay.textContent;
        console.log(secondNumber);
        theAnswer = operate(firstNumber, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        equalized = true;
        clearDisplay = true;
    }
});

const pressedPlus = document.getElementById('plus');
pressedPlus.addEventListener('click', function() {
    if (currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH') {
        firstNumberBoolean = false;
    } else {firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        console.log('firstNumber ' + firstNumber);
        operation = 'addition';
        clearDisplay = true;
        equalized = false;
    }
});


const pressedMinus = document.getElementById('minus');
pressedMinus.addEventListener('click', function() {
    if (currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH') {
        firstNumberBoolean = false;
    } else {firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'subtraction';
        clearDisplay = true;
        equalized = false;
    }
});

const pressedTimes = document.getElementById('times');
pressedTimes.addEventListener('click', function() {
    if (currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH') {
        console.log("does nothing");
        firstNumberBoolean = false;
    } else {firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'multiplication';
        clearDisplay = true;
        equalized = false;
    }
});


const pressedObelus = document.getElementById('obelus');
pressedObelus.addEventListener('click', function() {
    if (currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH') {
        console.log("does nothing");
        firstNumberBoolean = false;
    } else {firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'division';
        clearDisplay = true;
        equalized = false;
    }
});


const pressedAllClear = document.getElementById('AC');
pressedAllClear.addEventListener('click', function() {
    firstNumber = undefined;
    firstNumberBoolean = false;
    secondNumber = undefined;
    operation = false;
    clearDisplay = false;
    equalized = false;
    theAnswer = undefined;
    currentDisplay.textContent = 'READY';
});

const pressedDelete = document.getElementById('delete');
pressedDelete.addEventListener('click', function() {
    let display = currentDisplay.textContent;
    if (display.length == 1 || display == '-0') {
        currentDisplay.textContent = 0;
        currentLength = 1;
        if (equalized) {
            theAnswer = currentDisplay.textContent;
        }
    } else if (display == 'READY' || display == 'BIG ENOUGH' || display == "LOL no") {
        console.log('delete does nothing here');
        
    } else if (+display >-10 && +display < 0 && display.length == 2) {
        currentDisplay.textContent = 0;
        currentLength = 1;
        if (equalized) {
            theAnswer = currentDisplay.textContent;
        }
    } else {display = display.substring(0, display.length-1);
        currentDisplay.textContent = display;
        currentLength -= 1;
        if (equalized) {
            theAnswer = currentDisplay.textContent;
        }
    }
    
});


function operate(a,b,operation) {
    let answer = 'error';
    if (operation == "addition") {answer = addNumbers(a,b)};
    if (operation == "subtraction") {answer = subtractNumbers(a,b)};
    if (operation == "multiplication") {answer = multiplyNumbers(a,b)};
    if (operation == "division") {
        if (b == 0) {return 'LOL no';
    } else answer = divideNumbers(a,b)};
    /*if (answer > 99999999999) {
        return 'Too big'
    }*/
    answer = roundAnswer(answer);
    console.log('Current answer = ' + answer);
    return answer;
}


function roundAnswer(ans) {
    if (ans > 99999999999 || ans < -9999999999) {
        return 'BIG ENOUGH';
    } else {
        ans = +ans.toFixed(11);
        ans = ans.toString();
        ans = ans.substring(0,11);
        ans = +ans;
        return ans;
    }
}


const pressedDecimal = document.getElementById('decimal');
pressedDecimal.addEventListener('click', function() {
    changeDisplay('.');
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedZero = document.getElementById('zero');
pressedZero.addEventListener('click', function() {
    changeDisplay(0);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedOne = document.getElementById('one');
pressedOne.addEventListener('click', function() {
    changeDisplay(1);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedTwo = document.getElementById('two');
pressedTwo.addEventListener('click', function() {
    changeDisplay(2);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedThree = document.getElementById('three');
pressedThree.addEventListener('click', function() {
    changeDisplay(3);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedFour = document.getElementById('four');
pressedFour.addEventListener('click', function() {
    changeDisplay(4);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedFive = document.getElementById('five');
pressedFive.addEventListener('click', function() {
    changeDisplay(5);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedSix = document.getElementById('six');
pressedSix.addEventListener('click', function() {
    changeDisplay(6);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedSeven = document.getElementById('seven');
pressedSeven.addEventListener('click', function() {
    changeDisplay(7);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedEight = document.getElementById('eight');
pressedEight.addEventListener('click', function() {
    changeDisplay(8);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedNine = document.getElementById('nine');
pressedNine.addEventListener('click', function() {
    changeDisplay(9);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
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

    } else if (currentDisplay.textContent == 'READY' || currentDisplay.textContent =='BIG ENOUGH' || currentDisplay.textContent =='LOL no' || clearDisplay || currentDisplay.textContent == '0') {
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