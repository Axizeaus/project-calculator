// variables

const addId = document.getElementById('add');
const subtractId = document.getElementById('subtract');
const multiplyId = document.getElementById('multiply');
const divideId = document.getElementById('division');
const mainScreen = document.getElementById('main-screen');
const numbers = document.getElementById('numbers');


// console.log(numbers.children[0].textContent);
for (let i of numbers.children){
    console.log(i);
    i.onclick = (e) => displayOnScreen(e.target.textContent); 
}

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

function displayOnScreen(val){
    console.log(val);
    mainScreen.textContent += val;
}

