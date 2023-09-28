import Nav from '../../components/Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import WinePage from '../WinePage/WinePage'
import AuthPage from '../AuthPage/AuthPage';
import WineDetailPage from '../WineDetailPage/WineDetailPage';
import Footer from '../../components/Footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wine" element={<WinePage />} />
        <Route path='/wine/:wineId' element={<WineDetailPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
