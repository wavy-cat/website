export async function onRequest(context) {
    const api_key = await context.env.SECRETS.get("API_KEY");
    const city_name = await context.env.SECRETS.get("CITY_NAME");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return new Response("Error fetching weather data", {status: 500});
        }

        const {main, weather} = await response.json();
        const data = {main: main[0], weather};

        return new Response(JSON.stringify(data));
    } catch (error) {
        console.error(error);
        return new Response("Error occurred while fetching weather data");
    }
}