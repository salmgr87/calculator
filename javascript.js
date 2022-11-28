function addNumbers(a,b) {
    return a + b;
}

function subtractNumbers(a,b) {
    return a - b;
}

function multiplyNumbers(a,b) {
    return a*b;
}

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
let operationPressed = false;
let firstTime = true;
let repeatedNumber;
let readyToEqual = false;
let justOperated = false;
let pressedOnce = false;


const equalsPressed = document.getElementById('equals');
equalsPressed.addEventListener('click', function() {
    if (theAnswer === NaN || currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent == 'LOL no') {
        console.log("does nothing maaan");
    }
    else if (equalized) {
        if (firstTime) {
            firstTime = false;
            repeatedNumber = secondNumber;
        }
        theAnswer = operate(theAnswer, repeatedNumber, operation);
        if (theAnswer == 0) {theAnswer = "0"};
        currentDisplay.textContent = theAnswer;
        console.log(theAnswer + ' is theAnswer');
        console.log(secondNumber + ' is secondNumber');
        clearDisplay = true;
        equalized = true;
        readyToEqual = false;
    }
    else if (firstNumberBoolean && operation && equalized == false) {
        secondNumber = +currentDisplay.textContent;
        console.log(secondNumber);
        theAnswer = operate(firstNumber, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        equalized = true;
        clearDisplay = true;
        firstTime = true;
        readyToEqual = false;
    }
});

//Last two things (hopefully) are 1. press 2 + 3 * 4 and get 20
//Need to solve hitting the same operation twice or more in a row


const pressedPlus = document.getElementById('plus');
pressedPlus.addEventListener('click', function() {
    if (isNaN(currentDisplay.textContent) || currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent == 'LOL no') {
        firstNumberBoolean = false;
        currentDisplay.textContent = 0;
        theAnswer = '';
        equalized = false;
        readyToEqual =  false;
    } else if (justOperated || pressedOnce) {
        operation = 'addition';
    }
    else if (readyToEqual) {
        secondNumber = +currentDisplay.textContent;
        theAnswer = operate(firstNumber, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        firstNumber = theAnswer;
        clearDisplay = true;
        operation = 'addition';
        pressedOnce = false;
        
    }   else {
        firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'addition';
        clearDisplay = true;
        equalized = false;
        firstTime = true;
        readyToEqual = true;
        pressedOnce = true;

    }
});


const pressedMinus = document.getElementById('minus');
pressedMinus.addEventListener('click', function() {
    if (isNaN(currentDisplay.textContent) || currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent == 'LOL no') {
        firstNumberBoolean = false;
        currentDisplay.textContent = 0;
        theAnswer = '';
        equalized = false;
        readyToEqual =  false;
    } else if (justOperated || pressedOnce) {
        operation = 'subtraction';
    } else if (readyToEqual) {
        secondNumber = +currentDisplay.textContent;
        theAnswer = operate(firstNumber, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        firstNumber = theAnswer;
        clearDisplay = true;
        operation = 'subtraction';
        pressedOnce = false;
        
    } else {
        firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'subtraction';
        clearDisplay = true;
        equalized = false;
        firstTime = true;
        readyToEqual = true;
        pressedOnce = true;
    }
});

const pressedTimes = document.getElementById('times');
pressedTimes.addEventListener('click', function() {
    if (isNaN(currentDisplay.textContent) || currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent == 'LOL no') {
        firstNumberBoolean = false;
        currentDisplay.textContent = 0;
        theAnswer = '';
        equalized = false;
        readyToEqual =  false;
    } else if (justOperated || pressedOnce) {
        operation = 'multiplication';
    } else if (readyToEqual) {
        secondNumber = +currentDisplay.textContent;
        theAnswer = operate(firstNumber, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        firstNumber = theAnswer;
        clearDisplay = true;
        operation = 'multiplication';
        pressedOnce = false;
        
    } else {
        firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'multiplication';
        clearDisplay = true;
        equalized = false;
        firstTime = true;
        readyToEqual = true;
        pressedOnce = true;
    }
});


    /*if (isNaN(currentDisplay.textContent) || currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent == 'LOL no') {
        firstNumberBoolean = false;
        currentDisplay.textContent = 0;
        theAnswer = '';
        equalized = false;
        console.log('you got it, dude');
    } else {firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'multiplication';
        clearDisplay = true;
        equalized = false;
        firstTime = true;
    }
});*/


const pressedObelus = document.getElementById('obelus');
pressedObelus.addEventListener('click', function() {
    if (isNaN(currentDisplay.textContent) || currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent == 'LOL no') {
        firstNumberBoolean = false;
        currentDisplay.textContent = 0;
        theAnswer = '';
        equalized = false;
        readyToEqual =  false;
    } else if (justOperated || pressedOnce) {
        operation = 'division';
    } else if (readyToEqual) {
        secondNumber = +currentDisplay.textContent;
        theAnswer = operate(firstNumber, secondNumber, operation);
        currentDisplay.textContent = theAnswer;
        firstNumber = theAnswer;
        clearDisplay = true;
        operation = 'division';
        pressedOnce = false;
        
    } else {
        firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'division';
        clearDisplay = true;
        equalized = false;
        firstTime = true;
        readyToEqual = true;
        pressedOnce = true;
    }
});
    
    
    
    
    
    
    /*if (isNaN(currentDisplay.textContent) || currentDisplay.textContent == 'READY' || currentDisplay.textContent == 'BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent == 'LOL no') {
        firstNumberBoolean = false;
        currentDisplay.textContent = 0;
        theAnswer = '';
        equalized = false;
        console.log('you got it, dude');
    } else {firstNumber = +currentDisplay.textContent;
        firstNumberBoolean = true;
        operation = 'division';
        clearDisplay = true;
        equalized = false;
        firstTime = true;
    }
});*/


const pressedAllClear = document.getElementById('AC');
pressedAllClear.addEventListener('click', function() {
    firstNumber = undefined;
    firstNumberBoolean = false;
    secondNumber = undefined;
    operation = false;
    clearDisplay = false;
    equalized = false;
    firstTime = true;
    theAnswer = undefined;
    readyToEqual = false;
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
    } else if (display == 'READY' || display == 'BIG ENOUGH' || display == 'NEG NANCY' || display == "LOL no") {
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


const pressedSign = document.getElementById('sign');
pressedSign.addEventListener('click', function() {
    if (currentDisplay.textContent == 'READY' || currentDisplay.textContent =='BIG ENOUGH' || currentDisplay.textContent =='NEG NANCY' || currentDisplay.textContent =='LOL no' || currentDisplay.textContent == '0') {
        console.log('does nothing');
    }
    else if ((currentDisplay.textContent).includes('-')) {
        currentDisplay.textContent = currentDisplay.textContent.substring(1);
        if (equalized) {
            theAnswer = currentDisplay.textContent;
        }
    } else {
        currentDisplay.textContent = '-' + currentDisplay.textContent;
        if (equalized) {
            theAnswer = currentDisplay.textContent;
        }
    }
})


const pressedSquareRoot = document.getElementById('squareRoot');
pressedSquareRoot.addEventListener('click', function() {
    let squared = +currentDisplay.textContent;
    if (squared < 0) {
        currentDisplay.textContent = 'LOL no';
        firstNumber = undefined;
        firstNumberBoolean = false;
        secondNumber = undefined;
        operation = false;
        clearDisplay = false;
        equalized = false;
        firstTime = true;
        theAnswer = undefined;
    } else if (currentDisplay.textContent == 'READY' || currentDisplay.textContent =='BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent =='LOL no') {
        console.log('does nothing');
        firstNumber = undefined;
        firstNumberBoolean = false;
        secondNumber = undefined;
        operation = false;
        clearDisplay = false;
        equalized = false;
        firstTime = true;
        theAnswer = undefined;
    } else {
        let squared = +currentDisplay.textContent;
        firstNumber = undefined;
        firstNumberBoolean = false;
        secondNumber = undefined;
        operation = false;
        clearDisplay = true;
        equalized = false;
        firstTime = true;
        theAnswer = undefined;
        currentDisplay.textContent = roundAnswer(Math.sqrt(squared));
        currentLength = (currentDisplay.textContent).length;
    
    }
});


function operate(a,b,operation) {
    let answer = 'error';
    if (operation == "addition") {answer = addNumbers(a,b);
        justOperated = true;
    };
    if (operation == "subtraction") {
        answer = subtractNumbers(a,b);
        justOperated = true;
    };
    if (operation == "multiplication") {
        answer = multiplyNumbers(a,b);
        justOperated = true;
    };
    if (operation == "division") {
        if (b == 0) {
        firstNumber = false;
        firstNumberBoolean = false;
        secondNumber = undefined;
        operation = false;
        clearDisplay = true;
        equalized = false;
        firstTime = true;
        theAnswer = undefined;
        currentDisplay.textContent = 'LOL no';
        answer = 'LOL no';
        console.log('crazy pills');
        nanBroken = true;
        
    } else {
        answer = divideNumbers(a,b);
        justOperated = true;
        }
    }
    /*if (answer > 99999999999) {
        return 'Too big'
    }*/
    if (answer == 'LOL no') {
        console.log('seriously bro');
        return answer;
    } else {
        if (answer == 'LOL no') {
            return answer;
        } else {
            answer = roundAnswer(answer);
            console.log('Current answer = ' + answer);
            equalized = false;
            firstTime = true;
            return answer;
        }
    }
}


function roundAnswer(ans) {
    if (ans == 'LOL no') {
        return 'LOL no';
    }
    else if (ans > 99999999999) {
        return 'BIG ENOUGH';
    } else if (ans < -99999999999){
        return 'NEG NANCY'
    } else if (ans < 0) {
        ans = +ans.toFixed(11);
        ans = ans.toString();
        ans = ans.substring(0,12);
        if (ans.includes('e')) {
            
            let expo = ans.substring(ans.length-1);
            if (expo == 0) {
                return 0;
            }
            let leadingValues = ans.substring(0,ans.length-3);
            let leadingValuesLength = leadingValues.length;
            if (leadingValues.includes('.')) {
                leadingValuesLength -=1;
            }
            ans = +ans;
            let fixedLength = leadingValuesLength -2 + expo;
            if (fixedLength >9) {fixedLength = 9;}
            ans = ans.toFixed(fixedLength);
            return ans;

        } else {
            ans = +ans;
            return ans;
        }
    } else
        ans = +ans.toFixed(11);
        ans = ans.toString();
        ans = ans.substring(0,11);
        if (ans.includes('e')) {
            let expo = ans.substring(ans.length-1);
            expo = +expo;
            if (expo == 0) {
                return 0;
            }
            let leadingValues = ans.substring(0,ans.length-3);
            let leadingValuesLength = leadingValues.length;
            if (leadingValues.includes('.')) {
                leadingValuesLength -=1;
            }
            ans = +ans;
            let fixedLength = leadingValuesLength-1 + expo;
            if (fixedLength > 9 ) {fixedLength = 9;}
            ans = ans.toFixed(fixedLength);
            return ans;
        }
            else 
            ans = +ans;
        
            return ans;
    
}


const pressedDecimal = document.getElementById('decimal');
pressedDecimal.addEventListener('click', function() {
    changeDisplay('.');
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedZero = document.getElementById('zero');
pressedZero.addEventListener('click', function() {
    changeDisplay(0);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedOne = document.getElementById('one');
pressedOne.addEventListener('click', function() {
    changeDisplay(1);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedTwo = document.getElementById('two');
pressedTwo.addEventListener('click', function() {
    changeDisplay(2);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedThree = document.getElementById('three');
pressedThree.addEventListener('click', function() {
    changeDisplay(3);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedFour = document.getElementById('four');
pressedFour.addEventListener('click', function() {
    changeDisplay(4);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedFive = document.getElementById('five');
pressedFive.addEventListener('click', function() {
    changeDisplay(5);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedSix = document.getElementById('six');
pressedSix.addEventListener('click', function() {
    changeDisplay(6);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedSeven = document.getElementById('seven');
pressedSeven.addEventListener('click', function() {
    changeDisplay(7);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedEight = document.getElementById('eight');
pressedEight.addEventListener('click', function() {
    changeDisplay(8);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
        firstNumberBoolean = false;
        firstNumber = undefined;
    }
});

const pressedNine = document.getElementById('nine');
pressedNine.addEventListener('click', function() {
    changeDisplay(9);
    if (equalized && firstNumberBoolean) {
        equalized = false;
        firstTime = true;
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
        justOperated = false;
        pressedOnce = false;

    } else if (a == '.' && clearDisplay) {
        currentDisplay.textContent = '0.';
        currentLength = 2;
        clearDisplay = false;
        justOperated = false;
        pressedOnce = false;

    } else if (a == '.' && currentDisplay.textContent == '0') {
        currentDisplay.textContent = '0.';
        currentLength = 2;
        clearDisplay = false;
        justOperated = false;
        pressedOnce = false;

    } else if (currentDisplay.textContent == 'READY' || currentDisplay.textContent =='BIG ENOUGH' || currentDisplay.textContent == 'NEG NANCY' || currentDisplay.textContent =='LOL no' || clearDisplay || currentDisplay.textContent == '0') {
        currentDisplay.textContent = a;
        currentLength = 1;
        clearDisplay = false;
        justOperated = false;
        pressedOnce = false;

    } else if (a == 0 && currentDisplay.textContent[0] == '0' && !(currentDisplay.textContent).includes('.')) {
        console.log('does nothing');
        justOperated = false;
        pressedOnce = false;

    } else if (a == '.' && !(currentDisplay.textContent).includes('.')) {
            currentDisplay.textContent += a;
            currentLength ++;
            console.log('yes');
            console.log(currentDisplay.textContent);
            justOperated = false;
            pressedOnce = false;
        
    } else if (a == '.' && (currentDisplay.textContent).includes('.')) {
            console.log("do nothing");
            justOperated = false;
            pressedOnce = false;

    } else if (currentLength < 11) {
        currentDisplay.textContent += a;
        currentLength += 1;
        justOperated = false;
        pressedOnce = false;
    } else if (currentLength == 11 && currentDisplay.textContent[0] == '-') {
        currentDisplay.textContent += a;
        currentLength += 1;
        justOperated = false;
        pressedOnce = false;
    }
};