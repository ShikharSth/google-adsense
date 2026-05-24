import { useEffect, useState } from 'react';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function JokesPage() {
  const [joke, setJoke] = useState('');
  const [delivery, setDelivery] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadJoke() {
    setLoading(true);

    try {
      setJoke('Loading...');
      setDelivery('');

      const res = await fetch(
        'https://v2.jokeapi.dev/joke/Any?safe-mode'
      );

      const data = await res.json();

      // SINGLE JOKE
      if (data.type === 'single') {
        setJoke(data.joke);
        setCategory(data.category);
        setType(data.type);
      }

      // TWO PART JOKE
      else if (data.type === 'twopart') {
        setJoke(data.setup);
        setCategory(data.category);
        setType(data.type);

        // wait 3 seconds before showing punchline
        setTimeout(() => {
          setDelivery(data.delivery);
        }, 3000);
      }
    } catch (error) {
      setJoke('Failed to load joke.');
    }

    setLoading(false);
  }

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <Container>
      <div className="grid gap-6 py-20 lg:grid-cols-2">

        <div className="panel">

          {/* <h1 className="text-4xl font-bold">
            Random Joke Generator
          </h1> */}
          <h1 className="text-xl font-bold">Daily jokes help users relax and improve mood. 
          This page updates automatically with safe and family-friendly humor.</h1>

          <div className='flex gap-4 mt-4 text-sm text-slate-400'>
             <span>Category: {category}</span>
             <span>Type: {type}</span>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

            {/* Setup or Single Joke */}
            <p className="text-lg">
              {joke}
            </p>

            {/* Delivery */}
            {!delivery && joke !== 'Loading...' && (
              <p className="mt-4 text-slate-400 animate-pulse">
                Waiting for punchline...
              </p>
            )}

            {delivery && (
              <p className="mt-4 text-cyan-300 text-xl font-semibold">
                {delivery}
              </p>
            )}

          </div>

          <button
            onClick={loadJoke}
            disabled={loading}
            className="mt-5 rounded-full bg-cyan-400 px-5 py-3 text-slate-950 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'New Joke'}
          </button>

        </div>

        <AdSlot label="Sidebar Ad" />

      </div>
    </Container>
  );
}


// import { useEffect, useState } from 'react';
// import { getRandomJoke } from '../lib/api';
// import Container from '../components/Container';
// import AdSlot from '../components/AdSlot';

// export default function JokesPage() {
//   const [joke, setJoke] = useState('Loading...');

//   async function loadJoke() {
//     setJoke(await getRandomJoke());
//   }

//   useEffect(() => {
//     loadJoke();
//   }, []);

//   return (
//     <Container>
//       <div className="grid gap-6 py-20 lg:grid-cols-2">
//         <div className="panel">
//           <h1 className="text-4xl font-bold">Random Joke Generator</h1>

//           <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
//             {joke}
//           </div>

//           <button
//             onClick={loadJoke}
//             className="mt-5 rounded-full bg-cyan-400 px-5 py-3 text-slate-950"
//           >
//             New Joke
//           </button>
//         </div>

//         <AdSlot label="Sidebar Ad" />
//       </div>
//     </Container>
//   );
// }
