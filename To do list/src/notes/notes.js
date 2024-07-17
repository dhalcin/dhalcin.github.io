export default class Notes {
    constructor() {
        this.divNotes = document.querySelector('.notes');
        this.flag = false;
        this.contentNote = null;
    }

    createElement(element, classElement, pater) {
        this.element = document.createElement(element);
        this.element.classList.add(classElement);
        pater.appendChild(this.element);
        return this.element;
    }

    divNote() {
        this.div = this.createElement('div', 'div-note', this.divNotes);
        this.textarea = this.createElement('textarea', 'text-note', this.div);
        this.textarea.placeholder = 'Enter a note ....';
        this.textarea.rows = "13";
        this.textarea.cols = "25";
        this.textarea.setAttribute('maxlength', '100');

        const add = this.createElement('i', 'bi-check2', this.div)
        add.id = 'add-note';

        const discard = this.createElement('i', 'bi-file-minus', this.div)
        discard.id = 'discard';

        this.flag = true;
    }

    openNote() {
        if (this.flag === false) this.divNote();
        return true;
    }

    discardNote() {
        this.div.remove();
        this.flag = false;
    }

    addNote() {
        if (this.textarea.value !== '') {
            this.contentNote = this.createElement('div', 'contentNote', this.divNotes);
            const note = this.createElement('p', 'note', this.contentNote)
            note.textContent = this.textarea.value;
            
            const btnRemove = this.createElement('i', 'bi-trash2', this.contentNote);

            this.flag = false;
            this.div.remove();
        }         
    }

    removeNotes(element) {
        const pater = element.parentNode;
        pater.remove();
    }

}
