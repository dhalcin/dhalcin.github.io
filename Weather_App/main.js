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

function addTemp(temp = null, unt, id) {
    // * 'temp' will be null when 'catch' is activated that is '!response.ok' os true
    if (temp === null) {
        tagTemp.innerHTML = 0;
        unit.innerHTML = '';
        celsius.style.background = '#F0F0F0';
        return;
    }

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
    // * Sometimes weather conditions are 'partly-cloudy-night', so it's a new format
    let condition = conditions.replaceAll('-', ' ')
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // * I get the first letter of the word and convert it to a capital letter.
                    .join(' ')

    description.innerHTML = condition;
}

function weatherDetails(humidity, wind) {
    percentage.innerHTML = `${humidity}%`;
    speed.innerHTML = `${wind} Km/h`;
}

function updateWeatherImg(icon) {
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

function remastered(icon, temp, humidity, wind) {
    updateWeatherImg(icon);
    addTemp(temp, '°C');
    weatherDescription(icon);
    weatherDetails(humidity, wind)
}

// * The change of units, celsius to fahrenheit, this is the click event will only be triggered when the API query is successful.
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
    const current = location.currentConditions;
    const temp = current.temp;
    const icon = current.icon;
    const humidity = current.humidity;
    const wind = current.windspeed;

    remastered(icon, temp, humidity, wind);

    changeUnit();

}

async function connexion(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const location = await response.json();
        getData(location);

    } catch (error) {
        console.error(`Error fetching weather data: `, error);

        // * Adding in the weather-card (const card) container a custom error message. 
        addImage('error');
        addTemp(null, '°C', 'celsius');
        weatherDescription('---');
        weatherDetails('--- ', '--- ');
        input.focus();
    }
    
}

search.addEventListener('click', e => {
    e.preventDefault();
    
    if (input.value === '') return;

    const address = input.value.trim().replace(' ', ',');
    const url = `${API}${address}?key=${KEY}`;
    connexion(url);
});

