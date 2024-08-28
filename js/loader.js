async function removePlaceholder(obj) {
    obj.classList.remove("placeholder-wave");
    obj.classList.remove("placeholder");
    obj.classList.remove("rounded");
}

async function getWeather() {
    const weatherElement = document.getElementById("weather");

    try {
        const url = 'https://wavycat-page.pages.dev/weather';
        const response = await fetch(url);

        if (!response.ok) {
            weatherElement.innerText = 'Unknown outdoor';
        }

        const data = await response.json();
        weatherElement.innerHTML = `${data.main.temp}°C – ${data.weather.main}`; // – ${data.weather.main}

        console.log(data);
        await removePlaceholder(weatherElement);
    } catch (e) {
        console.log(`Error in wakatime: ${e}`);
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