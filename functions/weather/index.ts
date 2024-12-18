interface Env {
  OWM_API_KEY: string;
  CITY_NAME: string;
  WEATHER_CACHE: KVNamespace;
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
  const apiKey = context.env.OWM_API_KEY;
  const cityName = context.env.CITY_NAME;
  const cache = context.env.WEATHER_CACHE;
  const cacheKey = `weather:${cityName}`;
  const cacheTTL = 15 * 60; // 15 minutes in seconds
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': `max-age=${cacheTTL}`
  };

  // Check cache first
  console.log(context.env.WEATHER_CACHE);
  console.log(cache);
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return new Response(cachedData, {headers: headers});
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(response.statusText, await response.body.getReader().read());
    return new Response("Error fetching weather data", {status: 500});
  }

  const {weather, main}: APIResponse = await response.json();
  const data = {temp: main.temp, weather: weather[0].main};
  const dataString = JSON.stringify(data);

  // Cache the new data
  await cache.put(cacheKey, dataString, {expirationTtl: cacheTTL});

  return new Response(dataString, {headers: headers});
};
