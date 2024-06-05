import './style.css';
import Button from './click/click'

const addBtn = document.getElementById('addBtn');

const add = new Button(addBtn);
add.eventClick();