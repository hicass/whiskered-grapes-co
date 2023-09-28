import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as winesAPI from '../../utilities/wines-api';
import './WineDetailPage.css';

export default function WineDetailPage() {
  const [wine, setWine] = useState({});
  const params = useParams();

  useEffect(
    function () {
      async function renderWine() {
        const selectedWine = await winesAPI.getById(params.wineId);
        setWine(selectedWine);
      }
      renderWine();
    },
    [params]
  );

  return (
    <section id="wine-detail-section">
      <div>
        <img id="wine-detail-img" src={wine.image} alt="Wine in a glass" />
      </div>
      <div id="wine-detail-right">
        <div>
          <h1>{wine.name}</h1>
          <p>{wine.taste}</p>
        </div>
        <div>
          <p>Alcohol Content</p>
          <span>{wine.alcohol_content}%</span>
        </div>
        <div>
            <p>Allergens</p>
            <p>{wine.allergens}</p>
        </div>
        <div>
            <p>Conservation</p>
            <p>{wine.conservation}</p>
        </div>
        <div>
            <p>Pairing</p>
            <p>{wine.pairing}</p>
        </div>
        <span>${wine.price}</span>
      </div>
    </section>
  );
}
