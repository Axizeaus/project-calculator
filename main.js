// variables

const addId = document.getElementById('add');
const subtractId = document.getElementById('subtract');
const multiplyId = document.getElementById('multiply');
const divideId = document.getElementById('division');

// events 


// functions

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(func,x,y){
    console.log(func, x, y)
    return func(x,y);
}