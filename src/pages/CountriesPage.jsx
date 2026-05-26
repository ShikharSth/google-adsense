import { useEffect, useState } from 'react';
import { getCountries } from '../lib/api';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function load() {
      setCountries(await getCountries());
    }

    load();
  }, []);

  return (
    <Container>
      <div className="grid gap-6 py-20 lg:grid-cols-2">
        <div className="panel">
          <h1 className="text-4xl font-bold">Countries Explorer</h1>

          <div className="mt-6 grid gap-4">
            {countries.slice(0, 5).map((country) => (
              <div
                key={country.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between"
              >
                <div>
                <a href={`https://en.wikipedia.org/wiki/${country.name}`} target="_blank" rel="noopener noreferrer" ><h2 className="font-semibold">{country.name}</h2></a>
                <p className="text-sm text-slate-400">
                  Capital • {country.capital} | Region • {country.region}
                </p>
                <p className="text-sm text-slate-400">
                  Population • {country.population.toLocaleString()}
                </p>
                </div>
              
                <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="mt-2 w-auto h-25 rounded-lg object-cover float-end"
                />
              </div>
            ))}
          </div>
        </div>

        <AdSlot label="Sidebar Ad" />
      </div>
    </Container>
  );
}
