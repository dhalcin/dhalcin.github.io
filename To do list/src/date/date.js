import { format, parseISO, parse, max } from 'date-fns';

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
        const dates = taskDates;

        let datesList = [this.currentDate()];

        // Conversion of the task dates (string) to the format "Date"
        for (let i in dates) {
            const convert = parse(dates[i], 'dd-MM-yyyy', this.currentDate());
            datesList.push(convert);
        }
        
        // Rerturning the last of the dates
        const result = max(datesList);
        console.log(format(result, 'dd-MM-yyyy'));
    }
}