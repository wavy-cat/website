interface Env {
  SECRETS: KVNamespace;
}

interface Response {
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const api_key = await context.env.SECRETS.get("API_KEY");
  const city_name = await context.env.SECRETS.get("CITY_NAME");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&lang=en&appid=${api_key}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return new Response("Error fetching weather data", {status: 500});
    }

    const {weather, main}: Response = await response.json();
    const data = { temp: main.temp, weather: weather[0].main };

    return new Response(JSON.stringify(data), {
      headers: {'Content-Type': 'application/json'}
    });
  } catch (error) {
    console.error(error);
    return new Response("Error occurred while fetching weather data", {status: 500});
  }
};