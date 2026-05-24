import { Link } from 'react-router-dom';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function HomePage() {
  return (
    <Container>
      <section className="py-20">

        <span className="chip">
          Daily jokes and quotes platform
        </span>

        <h1 className="mt-6 text-5xl font-black">
          Daily Jokes & Quotes
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-300 leading-8">
          Welcome to Daily Jokes & Quotes — a simple platform designed
          to bring positivity, entertainment, and motivation through
          carefully selected jokes and inspiring quotes.
        </p>

        <p className="mt-6 max-w-3xl text-slate-400 leading-7">
          We are continuously improving the website by adding new
          categories, interactive pages, and useful content for
          daily visitors. Explore our jokes section and enjoy
          fresh content updated regularly.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/jokes"
            className="rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950"
          >
            Explore Jokes
          </Link>

          <Link
            to="/quotes"
            className="rounded-full border border-white/10 px-5 py-3 font-medium text-white"
          >
            Explore Quotes
          </Link>
        </div>

      </section>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="panel">

          <h2 className="text-2xl font-bold">
            What We Offer
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Daily random jokes</li>
            <li>• Inspirational quotes</li>
            <li>• Interactive entertainment pages</li>
            <li>• Regularly updated content</li>
            <li>• Fast and mobile-friendly experience</li>
            <li>• Regularly adding more features</li>
          </ul>

        </div>

        <AdSlot label="Homepage Banner Ad" />

      </div>
    </Container>
  );
}










// import { Link } from 'react-router-dom';
// import Container from '../components/Container';
// import AdSlot from '../components/AdSlot';

// export default function HomePage() {
//   return (
//     <Container>
//       <section className="py-20">
//         {/* <span className="chip">AdSense Ready JSX Starter</span> */}
//         <span className="chip">Jokes/Quotes to make day better</span>

//         <h1 className="mt-6 text-5xl font-black">
//           Daily Jokes Quotes website
//         </h1>

//         <h1 className="mt-6 text-xl font-black">
//           This website is under construction, but you can explore the jokes pages to see how it works.
//         </h1>

//         <p className="mt-6 max-w-3xl text-slate-300">
//           Daily jokes/quote can improve mood and engagement.
//         </p>

//         <div className="mt-8 flex gap-4">
//           <Link
//             to="/jokes"
//             className="rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950"
//           >
//             Explore
//           </Link>
//         </div>
//       </section>

//       <div className="grid gap-6 lg:grid-cols-2">
//         <div className="panel">
//           {/* <h2 className="text-2xl font-bold">Traffic Strategy</h2> */}
//           <h2 className="text-2xl font-bold">More Strategy</h2>

//           <ul className="mt-4 space-y-3 text-slate-300">
//             <li>• Publish niche pages</li>
//             <li>• Add internal linking</li>
//             <li>• Use utility tools and widgets</li>
//             <li>• Keep updating content</li>
//           </ul>
//         </div>

//         <AdSlot label="Homepage Banner Ad" />
//       </div>
//     </Container>
//   );
// }
