const main = document.querySelector('main');

const form = document.querySelector('.search');
const search = document.querySelector('.button-search');
const input = document.getElementById('input-search');

const card = document.querySelector('.weather-card');

const tagTemp = document.querySelector('.temp');
const unit = document.querySelector('.unit');
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

const unites = document.querySelector('.unites');

const description = document.querySelector('.description');

const percentage = document.querySelector('.percentage');
const speed = document.querySelector('.speed');

const API = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const KEY = 'NADR8PEJJVF922QUTDM6EEGC2';

function addImage(condition) {
    let img = `<img class="image-weather" src="./images/${condition}.png">`;
    card.innerHTML = img;
}

function unitConversion(temp, unit) {
    if (unit === '°F') {
        let fahrenheit = ((temp * 9/5) + 32).toFixed(0);
        return fahrenheit;
    }

    let celsius = ((temp - 32) * 5/9).toFixed(0);
    return celsius;
}

function addTemp(temp, unt, id) {
    tagTemp.innerHTML = unitConversion(temp, unt);
    unit.innerHTML = unt;

    if (id === 'fahrenheit') {
        fahrenheit.style.background = '#bae6fd';
        celsius.style.background = '#F0F0F0';
        return;
    }

    celsius.style.background = '#bae6fd';
    fahrenheit.style.background = '#F0F0F0';
    return;
}

function weatherDescription(conditions) {
    description.innerHTML = conditions;
}

function weatherDetails(humidity, wind) {
    percentage.innerHTML = `${humidity}%`;
    speed.innerHTML = `${wind} Km/h`;
}

function remastered(icon, temp, conditions, humidity, wind) {
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

    addTemp(temp, '°C');
    weatherDescription(conditions);
    weatherDetails(humidity, wind)
}

function changeUnit() {
    unites.addEventListener('click', e => {
        let id = e.target.id;
        let format = parseInt(tagTemp.textContent);
    
        if (id === 'fahrenheit' && unit.textContent !== '°F') {
            addTemp(format, '°F', id);
            return;
        
        } else if (id === 'celsius' && unit.textContent !== '°C') {
            addTemp(format, '°C', id);
            return;
        }

    })
}

function getData(location) {
    const address = location.resolvedAddress;
    const current = location.currentConditions;
    const temp = current.temp;
    const icon = current.icon;
    const conditions = current.conditions;
    const humidity = current.humidity;
    const wind = current.windspeed;

    //console.log(`${address}; Temp: ${temp}; conditions: ${conditions}; humidity: ${humidity}; windSpeed: ${wind}; icon: ${icon}`);
    remastered(icon, temp, conditions, humidity, wind);

    changeUnit();

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
});

