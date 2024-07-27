export default class Create {
    constructor() {
        this.element = null;
    }

    elements(tag, className, content = null) {
        let element = document.createElement(tag);
        element.classList.add(className);
        
        if (content) element.textContent = content;

        return element;
    }

    createElement(tag, className, content) {
        this.element = this.elements(tag, className, content);
        console.log(this.element);
    }
}
