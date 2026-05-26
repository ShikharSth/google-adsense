import { useEffect, useMemo, useState } from 'react';
import { getCountries } from '../lib/api';
import Container from '../components/Container';
import AdSlot from '../components/AdSlot';

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 3; // 5

  useEffect(() => {
    async function load() {
      try {
        const data = await getCountries();

        // sort alphabetically
        const sorted = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setCountries(sorted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // pagination calculations
  const totalPages = Math.ceil(
    countries.length / countriesPerPage
  );

  const paginatedCountries = useMemo(() => {
    const start = (currentPage - 1) * countriesPerPage;
    const end = start + countriesPerPage;

    return countries.slice(start, end);
  }, [countries, currentPage]);

  return (
    <Container>
      <div className="grid gap-6 py-20 lg:grid-cols-2">

        <div className="panel">

          <h1 className="text-4xl font-bold">
            Countries Explorer
          </h1>

          {loading ? (
            <p className="mt-6 text-slate-400">
              Loading countries...
            </p>
          ) : (
            <>
              <div className="mt-6 grid gap-4">

                {paginatedCountries.map((country) => (
                  <div
                    key={country.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between"
                  >
                    <div>

                      <a
                        href={`https://en.wikipedia.org/wiki/${country.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="font-semibold hover:text-cyan-300 transition">
                          {country.name}
                        </h2>
                      </a>

                      <p className="text-sm text-slate-400">
                        Capital • {country.capital || 'N/A'} | Region • {country.region}
                      </p>

                      <p className="text-sm text-slate-400">
                        Population • {country.population?.toLocaleString()}
                      </p>

                    </div>

                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="mt-2 w-30 h-auto rounded-lg object-cover" // h-24 w-auto
                    />
                  </div>
                ))}

              </div>

              {/* Pagination Controls */}
              <div className="mt-8 flex items-center justify-center gap-4">

                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => prev - 1)
                  }
                  className="rounded-full border border-white/10 px-5 py-2 text-white disabled:opacity-40"
                >
                  Previous
                </button>

                <span className="text-slate-300">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                  }
                  className="rounded-full border border-white/10 px-5 py-2 text-white disabled:opacity-40"
                >
                  Next
                </button>

              </div>
            </>
          )}

        </div>

        <AdSlot label="Sidebar Ad" />

      </div>
    </Container>
  );
}









// import { useEffect, useState } from 'react';
// import { getCountries } from '../lib/api';
// import Container from '../components/Container';
// import AdSlot from '../components/AdSlot';

// export default function CountriesPage() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     async function load() {
//       setCountries(await getCountries());
//     }

//     load();
//   }, []);

//   return (
//     <Container>
//       <div className="grid gap-6 py-20 lg:grid-cols-2">
//         <div className="panel">
//           <h1 className="text-4xl font-bold">Countries Explorer</h1>

//           <div className="mt-6 grid gap-4">
//             {countries.slice(0, 5).map((country) => (
//               <div
//                 key={country.name}
//                 className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between"
//               >
//                 <div>
//                 <a href={`https://en.wikipedia.org/wiki/${country.name}`} target="_blank" rel="noopener noreferrer" ><h2 className="font-semibold">{country.name}</h2></a>
//                 <p className="text-sm text-slate-400">
//                   Capital • {country.capital} | Region • {country.region}
//                 </p>
//                 <p className="text-sm text-slate-400">
//                   Population • {country.population.toLocaleString()}
//                 </p>
//                 </div>
              
//                 <img
//                     src={country.flag}
//                     alt={`${country.name} flag`}
//                     className="mt-2 w-auto h-25 rounded-lg object-cover float-end"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <AdSlot label="Sidebar Ad" />
//       </div>
//     </Container>
//   );
// }
