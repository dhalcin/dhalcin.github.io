export default class notesStorage {
    constructor(storedNotes) {
        // Constructor that initializes the note storage and selects the container in the DOM
        this.storedNotes = storedNotes;
        this.container = document.querySelector('.notes');
    }

    // Method to add a new note to storage
    storedNote(value) {
        let notes = {
            "note": value
        }
        this.storedNotes.push(notes)
        localStorage.setItem('notes', JSON.stringify(this.storedNotes))
    }

    // Method to remove a note based on the provided DOM element
    removeNote(element) {
        // Get the text of the note from the node before the current element
        const note = element.previousSibling.textContent;

        // Search for the note in the array and delete it
        for (let i = 0; i < this.storedNotes.length; i++) {
            if (this.storedNotes[i]['note'] === note) {
                this.storedNotes.splice(i, 1);
                break
            }
        }
        // Update localStorage with the modified array
        localStorage.setItem('notes', JSON.stringify(this.storedNotes));
    }

    createElement(element, className, content = null, container) {
        const tag = document.createElement(element);
        tag.classList.add(className);

        if (content) tag.textContent = content;

        container.appendChild(tag);

        return tag;
    }

    // Método para recordar y mostrar las notas almacenadas en el DOM
    rememberNotes() {
        // Verificar si hay notas almacenadas
        if (this.storedNotes.length !== 0) {
            for (let i = 0; i < this.storedNotes.length; i++) {
                const div = this.createElement('div', 'contentNote', null, this.container);
                this.createElement('p', 'note', this.storedNotes[i].note, div);
                this.createElement('i', 'bi-trash2', null, div);
            }
        }
    }
}