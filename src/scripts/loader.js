async function getWeather() {
    try {
        const url = '/weather';
        const response = await fetch(url);

        if (!response.ok) {
            console.error('Error in weather fetching:', response.statusText);
            return undefined;
        }

        const data = await response.json();
        return `${data.temp}°C – ${data.weather}`;
    } catch (e) {
        console.error('Error in weather fetching:', e);
        return undefined;
    }
}

function getTime() {
    return new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        hour12: false,
        timeZone: 'Etc/GMT-5'
    }) + ' YEKT';
}

async function clockTime() {
    const delay = 300; // ms
    const currentTimeElement = document.getElementById("time");

    setInterval(() => {
        const time = getTime();
        if (currentTimeElement.textContent !== time) currentTimeElement.textContent = time;
    }, delay);
}

function setDetails(weather, time) {
    let text = `<span id="time">${time}</span>`;
    if (weather !== undefined) text = `<span id="weather">${weather}</span> • ${text}`;
    document.getElementById("details").innerHTML = text;
}

async function loadingElements() {
    const [resultWeather, resultTime] = await Promise.all([getWeather(), getTime()]);
    setDetails(resultWeather, resultTime);
    await clockTime();
}

document.addEventListener("DOMContentLoaded", function () {
    loadingElements().then();
    // Здесь может быть ещё что-нибудь
});