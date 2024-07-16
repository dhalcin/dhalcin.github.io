export default class Notes {
    constructor() {
        this.divNotes = document.querySelector('.notes');
        this.flag = false;
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
        const add = this.createElement('button', 'add-note', this.div)
        add.textContent = '+';
        add.id = 'add-note';

        const discard = this.createElement('button', 'discard', this.div)
        discard.textContent = 'x';
        discard.id = 'discard';

        this.flag = true;
    }

    openNote() {
        if (this.flag === false) this.divNote();
    }

    discardNote() {
        this.div.remove();
        this.flag = false;
    }

    addNote() {
        if (this.textarea.value !== '') {
            const contentNote = this.createElement('div', 'contentNote', this.divNotes);
            const note = this.createElement('p', 'note', contentNote)
            note.textContent = this.textarea.value;
            
            const btnRemove = this.createElement('button', 'btnRemove', contentNote);
            btnRemove.textContent = 'x';
            btnRemove.id = 'btnRemove';

            this.div.remove();
        }         
    }

}
