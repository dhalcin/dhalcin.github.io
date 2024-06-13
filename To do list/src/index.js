import './style.css';
import { format } from 'date-fns';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from './click/click';
import DateModule from './date/date';

const addBtn = document.getElementById('addBtn');
const date = document.getElementById('dueDate');
date.value = format(new Date(), 'yyyy-MM-dd');

const add = new Button(addBtn);
add.eventClick('add');

const closedBtn= document.getElementById('closed-btn');
const closed = new Button(closedBtn);
closed.eventClick('closed')

const saveBtn = document.getElementById('save-btn');
const save = new Button(saveBtn);
save.eventClick('save');

const taskDate = document.querySelector('.task-duedate');
const newDate = new DateModule();
taskDate.textContent = `${format(newDate.date, 'dd-MM-yyyy')}`;
