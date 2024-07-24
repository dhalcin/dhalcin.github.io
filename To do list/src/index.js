import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Events from './events/events';

document.addEventListener('DOMContentLoaded', () => {
    // Gets the tasks stored in localStorage and converts them from JSON to an array
    // If there are no stored tasks, it is initialized as an empty array
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const events = new Events(storedTasks);
    events.click();
    events.remeber();
});