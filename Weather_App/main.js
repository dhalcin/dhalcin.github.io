const main = document.querySelector('main');

const form = document.querySelector('.search');
const search = document.querySelector('.button-search');
const input = document.getElementById('input-search');

const card = document.querySelector('.weather-card');

const API = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const KEY = 'NADR8PEJJVF922QUTDM6EEGC2';

function addImage(condition) {
    let img = `<img class="image-weather" src="./images/${condition}.png">`;
    card.innerHTML = img;
}

function remastered(icon) {
    switch (icon) {
        case 'rain':
            addImage('rain');
            break;

        case 'cloudy':
        case 'partly-cloudy-day':
            addImage('cloud');
            break;
        
        case 'clear-day':
            addImage('clear');
            break;

        case 'showers':
            addImage('showers');
            break;

        case 'snow':
            addImage('snow');
            break;

        case 'wind':
            addImage('mist');
            break;

        case 'partly-cloudy-night':
            addImage('partly-cloudy-night');
            break;

        case 'clear-night':
            addImage('clear-night');
            break;


        default:
            break;
    }
}


function getData(location) {
    const address = location.resolvedAddress;
    const current = location.currentConditions;
    const temp = current.temp;
    const icon = current.icon;
    const conditions = current.conditions;
    const humidity = current.humidity;
    const wind = current.windspeed;

    console.log(`${address}; Temp: ${temp}; conditions: ${conditions}; humidity: ${humidity}; windSpeed: ${wind}; icon: ${icon}`);
    remastered(icon);

}

async function connexion(url) {
    
    const response = await fetch(url);
    const location = await response.json();
    
    getData(location);
}

search.addEventListener('click', e => {
    e.preventDefault();
    
    if (input.value === '') return;

    const address = input.value.trim().replace(' ', ',');
    const url = `${API}${address}?key=${KEY}`;
    connexion(url);
})
