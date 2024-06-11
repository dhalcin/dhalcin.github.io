export default class Modal {
    constructor() {
        this.modal = document.querySelector('.modal');
    }

    openModal() {
        this.modal.style.display = 'flex';
    }

    closedModal() {
        this.modal.style.display = 'none';
    }
}