interface Env {
  OWM_API_KEY: string;
  CITY_NAME: string;
}

interface APIResponse {
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const api_key = context.env.OWM_API_KEY;
  const city_name = context.env.CITY_NAME;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&lang=en&appid=${api_key}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(response.statusText, await response.body.getReader().read());
      return new Response("Error fetching weather data", {status: 500});
    }

    const {weather, main}: APIResponse = await response.json();
    const data = { temp: main.temp, weather: weather[0].main };

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=1800'
      }
    });
  } catch (error) {
    console.error(error);
    return new Response("Error occurred while fetching weather data", {status: 500});
  }
};