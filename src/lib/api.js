export async function getRandomJoke() {
  const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
  const data = await res.json();
  return data.joke;
}

export async function getRandomQuote() {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  return data;
}

export async function searchCity(city) {
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', city);
  url.searchParams.set('count', '1');

  const res = await fetch(url);
  const data = await res.json();

  return data.results?.[0] || null;
}

export async function getCurrentWeather(lat, lon) {
  const url = new URL('https://api.open-meteo.com/v1/forecast');

  url.searchParams.set('latitude', lat);
  url.searchParams.set('longitude', lon);
  url.searchParams.set('current', 'temperature_2m,wind_speed_10m,relative_humidity_2m');

  const res = await fetch(url);
  const data = await res.json();

  return data.current;
}

export async function getCountries() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags'
  );

  const data = await res.json();

  return data.map((item) => ({
    name: item.name?.common,
    capital: item.capital?.[0],
    region: item.region,
    population: item.population,
    flag: item.flags?.svg,
  }));
}
