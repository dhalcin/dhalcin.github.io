export function contact(element, path) {
    element.innerHTML = '';
    const title = document.createElement('h2');
    const img = document.createElement('img');

    img.src = path;
    title.textContent = 'contact title';

    element.appendChild(title);
    element.appendChild(img);
}