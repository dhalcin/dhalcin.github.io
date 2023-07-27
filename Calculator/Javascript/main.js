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
                ouput.value += input.value + '÷'; //thi.innerText;
                input.value = '0';
            }
            break;

        case 'multiply':
            if (ouput.value[(ouput.value).length -1] === '*') {
                ouput.value += '';
            } else {
                ouput.value += input.value + '*';
                input.value = '0';
            }
            break;
            
        case 'add':
            if (ouput.value[(ouput.value).length -1] === '+') {
                ouput.value += '';
            } else {
                ouput.value += input.value + '+';
                input.value = '0';
            }
            break;
        
        case 'substract':
            if (ouput.value[(ouput.value).length -1] === '-') {
                ouput.value += '';
            } else {
                ouput.value += input.value + '-';
                input.value = '0';
            }
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
