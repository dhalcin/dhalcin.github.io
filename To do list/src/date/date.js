import { format, parseISO, parse, max, compareAsc } from 'date-fns';

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

    // Giving an ISO format to dates
    formatIso(dateInpt) {
        let value = parseISO(dateInpt.value);
        return format(value, 'dd-MM-yyyy');
    }

    ParseIso(string) {
        // Convert a 'textContent' to a date
        const date = parse(string, 'dd-MM-yyyy', this.date);

        // Once 'textContent' is converted to a 'Date' object a specified format is given
        const isoDate = format(date, 'yyyy-MM-dd');
        return isoDate;
    }

    compareDates(taskDates) {

        // Obtaining the list of all tasks
        // Converting dates(string) into Date format
        let dateList = taskDates.map(date => parse(date, 'dd-MM-yyyy', this.date));
        dateList.sort(compareAsc);
        return dateList.map(date => format(date, 'dd-MM-yyyy'));

    }
}
