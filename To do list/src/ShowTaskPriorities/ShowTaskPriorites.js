export default class Show {
    constructor(list) {
        // * container task -> div.tasks
        this.container = document.querySelector('.tasks');
        this.nodes = this.container.children;
        this.list = list;
    }

    emptyContainer() {
        console.log(this.nodes);
        while (this.nodes.length > 1) {
            this.nodes[1].remove();
        }
    }

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