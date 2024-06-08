import './style.css';
import { format } from 'date-fns';
import Button from './click/click';

const addBtn = document.getElementById('addBtn');
const add = new Button(addBtn);
add.eventClick();

const date = document.getElementById('dueDate');
date.value = format(new Date(), 'yyyy-MM-dd');

