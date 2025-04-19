"use client"

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

type response = {
  temp: number
  weather: string
}

export default function Weather() {
  const { data, error } = useSWR(
    `/api/weather`,
    fetcher
  ) as unknown as {
    data: response
    error: never
  }
  if (error) return 'Failed to load weather'
  if (!data) return 'Loading weather...'

  return `${data.temp}°C – ${data.weather}`
}