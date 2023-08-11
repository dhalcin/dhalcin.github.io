const input = document.getElementById('inpt');
const buttons = document.querySelectorAll('button');
const ouput = document.getElementById('opt');

let action = null;
let number1 = '';
let number2 = '';
let result = '';
let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;

function elements(e) {
    ouput.textContent = `${result}${e}`;
    input.textContent = `${result}`;
}

function postEqual() {
    input.textContent = result;
    number1 = result;
    number2 = '';
}

function equal() {
    if (sum === 1) {
        result = Number(number1) + Number(number2);
        ouput.textContent = `${number1}+${number2}=`;
        sum = 0;
        postEqual();
    } else if (sub === 1) {
        result = Number(number1) - Number(number2);
        ouput.textContent = `${number1}-${number2}=`;
        sub = 0;
        postEqual();
    } else if (mul === 1) {
        result = Number(number1) * Number(number2);
        ouput.textContent = `${number1}*${number2}=`;
        mul = 0;
        postEqual();
    } else if (div === 1) {
        result = Number(number1) / Number(number2);
        ouput.textContent = `${number1}/${number2}=`;
        div = 0;
        postEqual();
    } 
}

function reset() {
    ouput.textContent = '';
    input.textContent = '0';
    action = null;
    number1 = '';
    number2 = '';
    result = '';
    sum = 0;
    sub = 0;
    mul = 0;
    div = 0;
}

function remove() {
    let input_input = input.textContent;
    if (input.textContent !== '0' || input.textContent !== '') {
        if (input_input.length === 1) {
            element = input_input.replace(input_input[input_input.length - 1], '0');
            input.textContent = element;
        } else {
            console.log((input.textContent).length);
            neww = input_input.replace(input_input[input_input.length - 1], '');
            input.textContent = neww;
            console.log((input.textContent).length);
        }
    }
}

/*function operations(n1, op, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    switch (op) {
        case '+':
            result = n1 + n2;
            elements(op);
            postEqual();
            //sum = 0;
            //console.log(`dentro de operations +, sum ${sum}, sub ${sub}, mul ${mul}, div ${div}`);
            break;
        case '-':
            result = n1 - n2;
            //console.log(`se esta restando`);
            elements(op);
            postEqual();
            //sub = 0;
            //console.log(`dentro de operations -, sum ${sum}, sub ${sub}, mul ${mul}, div ${div}`);
            break;
        case '*':
            result = n1 * n2;
            //console.log(`se esta multiplicando`);
            elements(op);
            postEqual();
            //mul = 0;
            //console.log(`dentro de operations *, sum ${sum}, sub ${sub}, mul ${mul}, div ${div}`);
            break;
        case '/':
            result = n1 / n2;
            //console.log(`se esta diviendo`);
            elements(op);
            postEqual();
            //div = 0;
            //console.log(`dentro de operations /, sum ${sum}, sub ${sub}, mul ${mul}, div ${div}`);
            break;;
    }
}*/

function operate(e) {
    if (ouput.textContent === '') {
        if (e === '=') {
            ouput.textContent = number1;
        } else {
            ouput.textContent = number1 + e;
        }
    } else {
        ouput.textContent += number2;
        if (e === '+') {
            result = Number(number1) + Number(number2);
            elements(e);
            postEqual();
        }
        if (e === '-') {
            result = Number(number1) - Number(number2);
            elements(e);
            postEqual();
        }
        if (e === '*') {
            if (number2 !== '') {
                result = Number(number1) * Number(number2);
                elements(e);
                postEqual();
            } else {
                ouput.textContent = `${number1}${e}`;
            }
        }
        if (e === '/') {
            if (number2 !== '') {
                result = Number(number1) / Number(number2);
                elements(e);
                postEqual();
            }
            else {
                ouput.textContent = `${number1}${e}`;
            }
        }
        if (e === '=') {
            equal(number1, number2);
        }
    }
}
function numbers(val) {
    if (action === null || number1 === '') {
        number1 += val;
        input.textContent = number1;  
    } else {
        number2 += val;
        input.textContent = number2;
    }
}

function keys() {
    e = this.id;
    val = this.innerText;
    switch (e) {
        case 'reset':
            reset();
            break;

        case 'remove':
            remove();
            break;

        case 'add':
            action = '+';
            sum = 1;
            operate(action);
            break;
        
        case 'substract':
            action = '-';
            sub = 1;
            operate(action);
            break;
        
        case 'multiply':
            action = '*';
            mul = 1;
            operate(action);
            break;
        
        case 'division':
            action = '/';
            div = 1;
            operate(action);
            break;
        
        case 'equal':
            action = '=';
            operate(action);
            break;
        
        default:
            numbers(val);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', keys);
});

document.body.addEventListener('keydown', (e) => {
    if (e.key === '1') numbers('1');
    if (e.key === '2') numbers('2');
    if (e.key === '3') numbers('3');
    if (e.key === '4') numbers('4');
    if (e.key === '5') numbers('5');
    if (e.key === '6') numbers('6');
    if (e.key === '7') numbers('7');
    if (e.key === '8') numbers('8');
    if (e.key === '9') numbers('9');
    if (e.key === '0') numbers('0');
});
