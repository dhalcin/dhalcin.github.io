export default class Modify {
    constructor(storage) {
        // storage is the argument obtained from task.js, event.js and index.js, in other words it is the JSON (localStorage)
        this.storage = storage;
    }

    oldTask(oldElements) {

        let nameTask, description, priority, date;

        [nameTask, description, priority, date] = oldElements;

        for (let obj = 0; obj < this.storage.length; obj++) {
            let value = Object.values(this.storage[obj]);

            for (let i = 0; i <= 3; i++) {
                if (value[0] === nameTask && value[1] === description && value[2] === priority && value[3] === date) {
                    return obj;
                }
            }
        }
    }

    newTask(oldElements, newElements) {
        const storage = this.storage;

        let newName, newDescription, newPriority, newDate;

        [newName, newDescription, newPriority, newDate] = newElements;

        const index = this.oldTask(oldElements);
        storage[index].name = newName
        storage[index].description = newDescription;
        storage[index].priority = newPriority;
        storage[index].date = newDate;

        localStorage.setItem('tasks', JSON.stringify(storage));
    }
}

