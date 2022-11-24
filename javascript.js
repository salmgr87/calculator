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


function operate(a,b,operation) {
    let answer;
    if (operation == "addition") {answer = addNumbers(a,b)};
    if (operation == "subtraction") {answer = subtractNumbers(a,b)};
    if (operation == "multiplication") {answer = multiplyNumbers(a,b)};
    if (operation == "division") {answer = divideNumbers(a,b)};
    return answer;
}




const pressedOne = document.getElementById('one');
pressedOne.addEventListener('click', function() {
    console.log('1');
    changeDisplay(1);
    console.log('2');
});

const pressedTwo = document.getElementById('two');
pressedTwo.addEventListener('click', function() {
    console.log('3');
    changeDisplay(2);
    console.log('4');
});

//Note: Total length of number cannot exceed 11 characters
let currentLength;

//Note: currentDisplay is a string
let currentDisplay = document.getElementById('display');

function changeDisplay(a) {
    if (currentDisplay.textContent =='READY') {
        console.log('It says ready');
        currentDisplay.textContent = a;
        console.log(typeof currentDisplay.textContent);
        currentLength = 1;

    } else if (currentLength < 11) {
        currentDisplay.textContent += a;
        currentLength ++;
    }
}