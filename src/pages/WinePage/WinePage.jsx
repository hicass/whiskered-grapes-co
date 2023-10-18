import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import * as winesAPI from '../../utilities/wines-api';
import Logo from '../../components/Logo/Logo';
import WineItem from '../../components/WinePage/WineItem/WineItem';
import './WinePage.css';

export default function WinePage() {
  const [wineList, setWineList] = useState([]);
  const wineListItems = wineList.map((wine) => (
    <div className="wine-item-container">
      <Fade direction="up" triggerOnce="true">
        <WineItem key={wine._id} wine={wine} />
      </Fade>
    </div>
  ));

  useEffect(function () {
    async function getWines() {
      const wines = await winesAPI.getAll();
      setWineList(wines);
    }
    getWines();
  }, []);

  return (
    <section id="wine-section">
      <div id="wine-section-top">
        <div id="wine-section-top-container">
          <div id="wine-section-logo">
            <Logo />
          </div>
          <h1 id="wine-section-h1">Wine</h1>
        </div>
      </div>

      <div id="wine-list-container">{wineListItems}</div>
    </section>
  );
}
