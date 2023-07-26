const ouput = document.getElementById('ouput');
const input = document.getElementById('inpt');
const buttons = document.querySelectorAll('button');

ouput.disabled = true;
input.value = '0';

function reset() {
    ouput.value = '';
    input.value = '0';
}

function operations() {
    let numbers = ouput.value.split(/\+|\-|\=|\*|\÷/g).filter(Boolean);
    let operators = ouput.value.split(/[0-9]/g).filter(Boolean);

    switch (true) {
        case operators.includes('+'):
            input.value = Number(numbers[0]) + Number(numbers[1]);
            break;
        case operators.includes('*'):
            input.value = Number(numbers[0]) * Number(numbers[1]);
            break;
        case operators.includes('-'):
            input.value = Number(numbers[0]) - Number(numbers[1]);
            break;
        case operators.includes('÷'):
            input.value = Number(numbers[0]) / Number(numbers[1]);
            break;
    }

    /*if (operators.includes('+')) {
        input.value = Number(numbers[0]) + Number(numbers[1]);
    } else if (operators.includes('-')) {
        input.value = Number(numbers[0]) - Number(numbers[1]);
    } else if (operators.includes('*')) {
        input.value = Number(numbers[0]) * Number(numbers[1]);
        console.log(Number(numbers[0]) * Number(numbers[1]));
    } else if (operators.includes('÷')) {
        input.value = Number(numbers[0]) / Number(numbers[1]);
    }*/
}

function elements(e) {
    e.preventDefault();
    switch (this.id) {
        case 'reset':
            reset();
            break;
        
        case 'division':
            if (ouput.value[(ouput.value).length -1] === '÷') {
                ouput.value += '';
            } else {
                ouput.value += input.value + this.innerText;
            }
            break;

        case 'multiply':
            if (ouput.value[(ouput.value).length -1] === '*') {
                ouput.value += '';
            } else {
                ouput.value += input.value + this.innerText;
            }
            break;
            
        case 'add':
            if (ouput.value[(ouput.value).length -1] === '+') {
                ouput.value += '';
            } else {
                ouput.value += input.value + this.innerText;
            }
            break;
        
        case 'substract':
            if (ouput.value[(ouput.value).length -1] === '-') {
                ouput.value += '';
            } else {
                ouput.value += input.value + this.innerText;
            }
            break;
        
        case 'equal':
            ouput.value += `${input.value}${this.innerText}`;

            operations();

            break;
        
        default:
            input.value = '';
            if (input.value === '0') { //?
                input.value += this.innerText;
                console.log('primer valor ingresado');
            } else {
                input.value += this.innerText;
            }

    }

}

buttons.forEach((button) => {
    button.addEventListener('click', elements);
});

/*            /*let numbers = ouput.value.split(/\+|\-|\=|\÷/g).filter(Boolean);
            let operator = ouput.value.split(/[0-9]/g).filter(Boolean);
            if (operator.includes('÷')) {
  
               console.log(Number(numbers[0]) / Number(numbers[1]));
                input.value = Number(numbers[0]) / Number(numbers[1])
            }*/ 