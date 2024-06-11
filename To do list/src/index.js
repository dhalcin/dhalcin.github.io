import './style.css';
import { format } from 'date-fns';
import Button from './click/click';

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