export function menu(element, path) {
    
    element.innerHTML = '';

    const title = document.createElement('h2');
    const list = document.createElement('ol');
    const img = document.createElement('img');

    let menu = ['Menu1', 'Menu2', 'Menu3'];

    title.textContent = 'Menu';

    for (let i = 0; i < 3; i++) {
        let e = document.createElement('li');
        e.textContent = `${menu[i]}`;
        list.appendChild(e);
    }

    img.src = path;

    element.appendChild(title);
    element.appendChild(list);
    element.appendChild(img);
}