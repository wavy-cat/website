const unknown = '¯\\_(ツ)_/¯';

async function removePlaceholder(element) {
    element.classList.remove("placeholder-wave");
    element.classList.remove("placeholder");
    element.classList.remove("rounded");
}

async function setWeatherValue(element, value) {
    element.innerText = value;
    await removePlaceholder(element);
}

async function getWeather() {
    const weatherElement = document.getElementById("weather");

    try {
        const url = '/weather';
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Error in weather fetching: ${response.statusText}`);
            await setWeatherValue(weatherElement, unknown);
            return;
        }

        const data = await response.json();
        const value = `${data.temp}°C – ${data.weather}`;
        await setWeatherValue(weatherElement, value);
    } catch (e) {
        console.error(`Error in weather fetching: ${e}`);
        await setWeatherValue(weatherElement, unknown);
    }
}

async function clockTime() {
    const currentTimeElement = document.getElementById("time");

    setInterval(() => {
        currentTimeElement.innerHTML = new Date().toLocaleString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
            // second: 'numeric',
            hour12: false,
            timeZone: 'Etc/GMT-5'
        });
    }, 1000);
}


document.addEventListener("DOMContentLoaded", function () {
    clockTime().then();
    getWeather().then();
    // Здесь может быть ещё что-нибудь
});