async function getWeather() {
    try {
        const response = await fetch('/weather');

        if (!response.ok) {
            console.error('Error in weather fetching:', response.statusText);
            return undefined;
        }

        const data = await response.json();
        return `${data.temp}°C – <span class="secondary-2">${data.weather}</span>`;
    } catch (e) {
        console.error('Error in weather fetching:', e);
        return undefined;
    }
}

function getTime() {
    const time = new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        hour12: false,
        timeZone: 'Etc/GMT-5'
    });
    return `${time} <span class="secondary-2">YEKT</span>`;
}

async function clockTime() {
    const delay = 1000; // ms
    const currentTimeElement = document.getElementById("time");

    setInterval(() => {
        const time = getTime();
        if (currentTimeElement.innerHTML !== time) currentTimeElement.innerHTML = time;
    }, delay);
}

function setDetails(weather, time) {
    let text = `<span id="time">${time}</span>`;
    if (weather !== undefined) text = `${weather} • ${text}`;
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