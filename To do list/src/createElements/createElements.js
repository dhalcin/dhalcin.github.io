export default class Create {
    // Method to create a div
    div(className, container) {
        let element = document.createElement('div');
        element.classList.add(className);
        container.appendChild(element);
        return element
    }

    // Method to create an h3, p or span element
    h3_P_Span(tag, content, container) {
        let element = document.createElement(tag);
        if (tag === 'h3') element.classList.add('task-name');
        if (tag === 'p') element.classList.add('text-description');
        if (tag === 'span') element.classList.add('task-duedate');

        element.textContent = content;
        container.appendChild(element);
    }

    // Method for creating buttons
    buttons(typeButton, priority = null, container) {
        let element = document.createElement('button');
        element.classList.add('button-task');
        let icon = document.createElement('i');

        // * Dependig on the type of button; bi-circle, bi-pencil, bi-trash and taking into account the button priority (if any)
        if (typeButton === 'bi-circle') {
            icon.classList.add(typeButton);
            if (priority === 'low') icon.style.color = 'yellow';
            if (priority === 'medium') icon.style.color = 'blue';
            if (priority === 'high') icon.style.color = 'red';

        } else {
            icon.classList.add(typeButton);
        }

        element.appendChild(icon);
        container.appendChild(element);
    }
}
