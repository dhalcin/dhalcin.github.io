import css from './style.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg';
import { home } from './home';
import { menu } from './menu'; 
import { contact } from './contact';

const content = document.getElementById('content')

home(content, image1);

document.getElementById('home').addEventListener('click', () => home(content, image1));
document.getElementById('menu').addEventListener('click', () => menu(content, image2));
document.getElementById('contact').addEventListener('click', () => contact(content, image3));


/*

The images were obtained from : https://www.pexels.com/

*/