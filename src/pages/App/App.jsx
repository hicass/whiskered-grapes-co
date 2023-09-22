import Nav from '../../components/Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../../components/Footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
