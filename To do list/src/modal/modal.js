export default class Modal {
    constructor() {
        this.modal = document.querySelector('.modal');
    }

    getModal() {
        this.modal.style.display = 'flex';
    }
}