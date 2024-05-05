function getData() {
    const currentTimeElement = document.getElementById("time");
    const wakatimeElement = document.getElementById("hrs");
    console.log(currentTimeElement);

    const url = 'https://wakatime.com/share/@wavycat/204b5063-e1b5-4014-a7d6-0f9b2af08d07.json';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            wakatimeElement.innerHTML = data.data.grand_total.human_readable_total_including_other_language.split(' ')[0];
        })
        .catch(error => console.error('Error:', error));

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
    getData();
    // Здесь может быть ещё что-нибудь
});