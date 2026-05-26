import { useState } from 'react';
import { searchCity, getCurrentWeather } from '../lib/api';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function WeatherPage() {
  const [city, setCity] = useState('Kathmandu');
  const [weather, setWeather] = useState(null);

  async function search() {
    const location = await searchCity(city);

    if (!location) return;

    const result = await getCurrentWeather(
      location.latitude,
      location.longitude
    );

    setWeather(result);
  }

  return (
    <Container>
      <div className="grid gap-6 py-20 lg:grid-cols-2">
        <div className="panel">
          <h1 className="text-4xl font-bold">Weather Search</h1>

          <div className="mt-6 flex gap-3">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3"
            />

            <button
              onClick={search}
              className="rounded-full bg-cyan-400 px-5 py-3 text-slate-950"
            >
              Search
            </button>
          </div>

          {weather && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              {/* <p>Location: {city}</p> */}
              {/* <p>Time: {weather.}</p> */}
              <p>Temperature: {weather.temperature_2m}°C</p>
              <p>Humidity: {weather.relative_humidity_2m}%</p>
              <p>Wind Speed: {weather.wind_speed_10m} km/h</p>
            </div>
          )}
        </div>

        <AdSlot label="Sidebar Ad" />
      </div>
    </Container>
  );
}
