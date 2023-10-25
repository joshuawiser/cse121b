const h1text = document.querySelector('.head-text');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const timeimg = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forcast = new Forcast();

const updateUI = (data) => {
    const { cityData, weather } = data;

    details.innerHTML = `
    <h5 class="my-3">
        ${cityData.EnglishName}, ${cityData.AdministrativeArea.LocalizedName}, ${cityData.Country.LocalizedName}
    </h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
    </div>
`;


    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }


};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = form.city.value.trim();
    localStorage.setItem('city', city);
    form.reset();
    form.city.blur();
    forcast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});

if (localStorage.getItem('city')) {
    forcast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}
