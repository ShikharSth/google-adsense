import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import JokesPage from './pages/JokesPage';
import QuotesPage from './pages/QuotesPage';
import WeatherPage from './pages/WeatherPage';
import CountriesPage from './pages/CountriesPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jokes" element={<JokesPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
