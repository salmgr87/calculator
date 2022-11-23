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


console.log(divideNumbers(1,3));
