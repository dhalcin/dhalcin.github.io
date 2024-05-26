export function home(element, name) {

    element.innerHTML = '';

    const img = document.createElement('img');
    const description = document.createElement('p');
    description.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem ipsam magni similique, 
    earum eligendi dicta repudiandae et expedita a nesciunt doloremque officiis modi labore ratione! Saepe c
    upiditate repellendus maiores.`;
    img.src = name;
    
    element.appendChild(img);
    element.appendChild(description);
}