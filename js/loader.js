const unknown = '¯\\_(ツ)_/¯';

async function getWeather() {
    try {
        const url = '/weather';
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Error in weather fetching: ${response.statusText}`);
            return unknown;
        }

        const data = await response.json();
        return `${data.temp}°C – ${data.weather}`;
    } catch (e) {
        console.error(`Error in weather fetching: ${e}`);
        return unknown;
    }
}

async function getTime() {
    return new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Etc/GMT-5'
    }) + ' Ekb';
}

async function clockTime() {
    const currentTimeElement = document.getElementById("time");

    setInterval(() => {
        getTime().then(time => currentTimeElement.innerHTML = time.toString());
    }, 100);
}

async function setDetails(text) {
    const detailsElement = document.getElementById("details");
    detailsElement.innerHTML = text;
}

async function loadingElements() {
    const [result1, result2] = await Promise.all([getWeather(), getTime()]);
    await setDetails(`<span id="weather">${result1}</span> • <span id="time">${result2}</span>`);
    await clockTime();
}

document.addEventListener("DOMContentLoaded", function () {
    // clockTime().then();
    // getWeather().then();
    loadingElements().then();
    // Здесь может быть ещё что-нибудь
});