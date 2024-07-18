export default class List {
    constructor() {
        this.low = [];
        this.medium = [];
        this.high = [];
    }

    lowPriority(task) {
        this.low.push(task);
    }

    mediumPriority(task) {
        this.medium.push(task);
    }

    highPriority(task) {
        this.high.push(task);
    }
}