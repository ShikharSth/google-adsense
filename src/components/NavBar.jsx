import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold">
          PulseHub JSX
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link to="/jokes">Jokes</Link>
          <Link to="/quotes">Quotes</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/countries">Countries</Link>
        </nav>
      </div>
    </header>
  );
}
