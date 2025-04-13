export const runtime = "edge"

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

const allowOrigin = 'https://wavycat.ru, https://www.wavycat.ru'

export async function GET() {
  const env = process.env as unknown as Env
  const apiKey = env.OWM_API_KEY
  const cityName = env.CITY_NAME
  const cache = env.WEATHER_CACHE
  const cacheKey = `weather:${cityName}`
  const cacheTTL = 15 * 60 // 15 minutes in seconds
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': `max-age=${cacheTTL}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Max-Age': '86400'
  }

  // Return data from the cache, if it is there
  const cachedData = await cache.get(cacheKey)
  if (cachedData) return new Response(cachedData, {headers: headers})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=${apiKey}`
  const response = await fetch(url)

  if (!response.ok) {
    console.error(response.statusText, await response.text())
    return new Response("Error fetching weather data", {status: 500})
  }

  const {weather, main}: APIResponse = await response.json()
  const data = {temp: main.temp, weather: weather[0].main}
  const dataString = JSON.stringify(data)

  // Cache the new data
  await cache.put(cacheKey, dataString, {expirationTtl: cacheTTL})

  return new Response(dataString, {headers: headers})
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': allowOrigin,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Max-Age': '86400'
    }
  })
}