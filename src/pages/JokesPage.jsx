import { useEffect, useState } from 'react';
import { getRandomJoke } from '../lib/api';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function JokesPage() {
  const [joke, setJoke] = useState('Loading...');

  async function loadJoke() {
    setJoke(await getRandomJoke());
  }

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <Container>
      <div className="grid gap-6 py-20 lg:grid-cols-2">
        <div className="panel">
          <h1 className="text-4xl font-bold">Random Joke Generator</h1>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            {joke}
          </div>

          <button
            onClick={loadJoke}
            className="mt-5 rounded-full bg-cyan-400 px-5 py-3 text-slate-950"
          >
            New Joke
          </button>
        </div>

        <AdSlot label="Sidebar Ad" />
      </div>
    </Container>
  );
}
