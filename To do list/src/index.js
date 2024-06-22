import './style.css';
import { format } from 'date-fns';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Events from './events/events';
import DateModule from './date/date';

const date = document.getElementById('dueDate');
date.value = format(new Date(), 'yyyy-MM-dd');

const events = new Events();
events.click();

const taskDate = document.querySelector('.task-duedate');
const newDate = new DateModule();
taskDate.textContent = `${format(newDate.date, 'dd-MM-yyyy')}`;
