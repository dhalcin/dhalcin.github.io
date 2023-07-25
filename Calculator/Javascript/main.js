const other = document.getElementById('other');
const input = document.getElementById('inpt');
const buttons = document.querySelectorAll('button');

other.disabled = true;

function remove() {
    other.value = '';
    input.value = '';
}

function elements(e) {
    e.preventDefault();
    
    if (this.id === 'remove') {
        remove();
    } else {

        if (other.value === '' && input.value === '') {
            switch (this.id) {
                case 'division':
                    other.value += '0 ÷';
                    break;
                
                case 'multiply':
                    other.value += '0 *';
                    break;
                
                case 'substract':
                    other.value += '0 -';
                    break;
                
                case 'add':
                    other.value += '0 +';
                    break;
                
                case 'equal':
                    other.value += '0 =';
                    break;
            }
        } else {
            input.value += this.innerText;
        }


        
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', elements);
});