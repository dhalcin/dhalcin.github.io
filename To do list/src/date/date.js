import { format } from 'date-fns';

export default class DateModule {
    constructor() {
        this.date = new Date();
        this.defaultTask = document.querySelector('.task-duedate');
        this.defaultTask.textContent = this.currentDate();
        this.inptDate = document.getElementById('dueDate');
        this.inptDate.value = this.dateIso();

    }

    currentDate() {
        return format(this.date, 'dd-MM-yyyy');
    }

    // ISO format for input date (html)
    dateIso() {
        return format(this.date, 'yyyy-MM-dd');
    }

    show() {
        return this.inptDate.showPicker();
    }

}