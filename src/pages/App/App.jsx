import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as winesAPI from '../../utilities/wines-api';
import Nav from '../../components/Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import WinePage from '../WinePage/WinePage'
import WineDetailPage from '../WineDetailPage/WineDetailPage';
import WineTourPage from '../WineTourPage/WineTourPage';
import Footer from '../../components/Footer/Footer';
import './App.css';

export default function App() {
  const [wineList, setWineList] = useState([]);

  useEffect(function () {
    async function getWines() {
      const wines = await winesAPI.getAll();
      setWineList(wines);
    }
    getWines();
  }, []);

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage wineList={wineList} />} />
        <Route path="/about" element={<AboutPage wineList={wineList} />} />
        <Route path="/wine" element={<WinePage wineList={wineList} />} />
        <Route path='/wine/:wineId' element={<WineDetailPage />} />
        <Route path='/tour' element={<WineTourPage wineList={wineList} />} />
      </Routes>
      <Footer />
    </main>
  );
}
