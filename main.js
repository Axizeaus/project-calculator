// variables

const addId = document.getElementById('add');
const subtractId = document.getElementById('subtract');
const multiplyId = document.getElementById('multiply');
const divideId = document.getElementById('divide');
const mainScreen = document.getElementById('main-screen');
const numbers = document.getElementById('numbers');
const clearer = document.getElementById('clear');
const history = document.getElementById('history');
const deleter = document.getElementById('delete');
const equal = document.getElementById('equal');

// events 

for (let i of numbers.children){
    if (i.id === ''){
        i.onclick = (e) => displayOnScreen(e.target.textContent); 
    } else if (i.id === 'dot'){
        // do dot related things.
    } else if (i.id === 'equal'){
        equal.onclick = (e) => calculate();
    }
    // think about adding operate function here later. 2 
}

clearer.onclick = () => cleanScreen();
deleter.onclick = () => deleteFunc();
addId.onclick = () =>  moveMainToHistory(mainScreen.textContent + '+')
subtractId.onclick = () => moveMainToHistory(mainScreen.textContent + '-');
multiplyId.onclick = () =>moveMainToHistory(mainScreen.textContent + 'x');
divideId.onclick = () => moveMainToHistory(mainScreen.textContent + '/');


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
    cleanMainScreen()
    console.log(func, x, y)
    return func(x,y);
}

function displayOnScreen(val){
    console.log(val);
    mainScreen.textContent += val;
    // think about adding operate function here later.
}

function cleanMainScreen(){
    mainScreen.textContent = '';
}

function cleanScreen(){
    cleanMainScreen()
    history.textContent = '';
}

function deleteFunc(){
    let temp = mainScreen.textContent;
    mainScreen.textContent = temp.substring(0,temp.length-1);

}

function moveMainToHistory(content){
    history.textContent = content;
    cleanMainScreen()
}

function calculate(){
    let firstNum = Number(history.textContent.substring(0,history.textContent.length-1))
    let operator = history.textContent.substring(history.textContent.length-1, history.textContent.length)
    console.log(firstNum, operator)
    let secondNum = Number(mainScreen.textContent);

    if (operator === '+'){
        displayOnScreen(operate(add,firstNum, secondNum))
    } else if (operator === '-'){
        displayOnScreen(operate(subtract,firstNum, secondNum))
    } else if (operator === "x"){
        displayOnScreen(operate(multiply,firstNum, secondNum))
    } else if (secondNum === 0){
        cleanMainScreen();
        displayOnScreen("The second number shouldn't be 0.")
    } else {
        displayOnScreen(operate(divide,firstNum, secondNum))
    }

    history.textContent = '';
}