export default class ShowTaskPriorities {
    constructor(list) {
        // * container task -> div.tasks
        this.container = document.querySelector('.tasks');
        this.nodes = this.container.children;

        // 'list' argument initializing ListPriorities in event.js
        this.list = list;
    }

    // delete all children of div.tasks; except div.legend
    emptyContainer() {
        while (this.nodes.length > 1) {
            this.nodes[1].remove();
        }
    }

    // adding the tasks to this.container
    appendTask(list) {
        for (let i = 0; i < list.length; i++) {
            this.container.appendChild(list[i]);
        }

    }

    displayTask(list) {
        this.emptyContainer();
        this.appendTask(list);
    }

    priorityLow() {
        this.displayTask(this.list.low);
    }

    priorityMedium() {
        this.displayTask(this.list.medium);
    }

    priorityHigh() {
        this.displayTask(this.list.high);
    }

}