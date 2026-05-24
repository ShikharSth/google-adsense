import { Link } from 'react-router-dom';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function HomePage() {
  return (
    <Container>
      <section className="py-20">
        <span className="chip">AdSense Ready JSX Starter</span>

        <h1 className="mt-6 text-5xl font-black">
          React + Vite + Tailwind traffic website
        </h1>

        <h1 className="mt-6 text-2xl font-black">
          This website is under construction, but you can explore the jokes pages to see how it works.
        </h1>

        <p className="mt-6 max-w-3xl text-slate-300">
          Build content pages, use free APIs, grow organic traffic,
          and monetize using Google AdSense.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/jokes"
            className="rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950"
          >
            Explore
          </Link>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="panel">
          <h2 className="text-2xl font-bold">Traffic Strategy</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Publish niche pages</li>
            <li>• Add internal linking</li>
            <li>• Use utility tools and widgets</li>
            <li>• Keep updating content</li>
          </ul>
        </div>

        <AdSlot label="Homepage Banner Ad" />
      </div>
    </Container>
  );
}
