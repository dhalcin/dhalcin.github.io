import './style.css';
import { format } from 'date-fns';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Event from './events/events';
import DateModule from './date/date';

const addBtn = document.getElementById('addBtn');
const date = document.getElementById('dueDate');
date.value = format(new Date(), 'yyyy-MM-dd');

const add = new Event(addBtn);
add.eventHandler('add');

const closedBtn= document.getElementById('closed-btn');
const closed = new Event(closedBtn);
closed.eventHandler('closed')

const saveBtn = document.getElementById('save-btn');
const save = new Event(saveBtn);
save.eventHandler('save');

const taskDate = document.querySelector('.task-duedate');
const newDate = new DateModule();
taskDate.textContent = `${format(newDate.date, 'dd-MM-yyyy')}`;
