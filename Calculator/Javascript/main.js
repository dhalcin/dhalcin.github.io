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
}

function element(e) {
    if (ouput.value[(ouput.value).length - 1] === e) {
        ouput.value += input.value + e;
        input.value = '0';
    } else if (input.value === '0') {
        ouput.value += e;
    } 
    else {
        ouput.value += input.value + e;
        input.value = '0';
    }
}

function elements(e) {
    e.preventDefault();
    switch (this.id) {
        case 'reset':
            reset();
            break;
        
        case 'division':
            element('÷');
            break;

        case 'multiply':
            element('*')
            break;
            
        case 'add':
            element('+');
            break;
        
        case 'substract':
            element('-');
            break;
        
        case 'equal':
            ouput.value += `${input.value}${this.innerText}`;
            operations();
            break;
        
        default:

            if (input.value[0] === '0') {
                let value = (input.value).replace('0', this.innerText);
                input.value = value;
            } else {
                input.value += this.innerText;
            }
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', elements);
});
