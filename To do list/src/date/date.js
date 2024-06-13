import { format, subDays, addDays} from 'date-fns';

export default class DateModule {
    constructor() {
        this.date = new Date();
    }

    previousDate() {
        const previous = subDays(this.date, 2);
        console.log(format(previous, 'dd-MM-yyyy'));
    }

    laterDate() {
        const later = addDays(this.date, 2);
        console.log(format(later, 'dd-MM-yyyy'));
    }

}