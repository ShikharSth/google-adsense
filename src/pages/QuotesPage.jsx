import { useEffect, useState } from 'react';
import { getRandomQuote } from '../lib/api';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function QuotesPage() {
  const [quote, setQuote] = useState({ content: 'Loading...', author: '' });

  async function loadQuote() {
    const data = await getRandomQuote();
    setQuote(data);
  }

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <Container>
      <div className="grid gap-6 py-20 lg:grid-cols-2">
        <div className="panel">
          <h1 className="text-4xl font-bold">Quote Generator</h1>

          <blockquote className="mt-6 text-2xl font-semibold">
            "{quote.quote}"
          </blockquote>

          <p className="mt-4 text-slate-400">— {quote.author}</p>

          <button
            onClick={loadQuote}
            className="mt-5 rounded-full bg-cyan-400 px-5 py-3 text-slate-950"
          >
            New Quote
          </button>
        </div>

        <AdSlot label="Sidebar Ad" />
      </div>
    </Container>
  );
}
