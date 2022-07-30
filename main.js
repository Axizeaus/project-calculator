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

// events 

for (let i of numbers.children){
    if (i.id === ''){
        console.log(i);
        i.onclick = (e) => displayOnScreen(e.target.textContent); 
    } else if (i.id === 'dot'){
        // do dot related things.
    } else if (i.id === 'equal'){
        // do equal related things.
    }
    // think about adding operate function here later. 2 
}

clear.onclick = () => cleanScreen();
deleter.onclick = () => deleteFunc();
// addId.onclick = () => displayOnScreen('+');
// subtractId.onclick = () => displayOnScreen('-');
// multiplyId.onclick = () => displayOnScreen('x');
// divideId.onclick = () => displayOnScreen('/');
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
    console.log(func, x, y)
    return func(x,y);
}

function displayOnScreen(val){
    console.log(val);
    mainScreen.textContent += val;
    // think about adding operate function here later.
}

function cleanScreen(){
    mainScreen.textContent = '';
    history.textContent = '';
}

function deleteFunc(){
    let temp = mainScreen.textContent;
    mainScreen.textContent = temp.substring(0,temp.length-1);

}

function moveMainToHistory(content){
    history.textContent += content;
    mainScreen.textContent = ''
}
