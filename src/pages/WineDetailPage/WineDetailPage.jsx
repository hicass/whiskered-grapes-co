import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import * as winesAPI from '../../utilities/wines-api';
import './WineDetailPage.css';

export default function WineDetailPage() {
  const [wine, setWine] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    console.log("WEEEE")
    navigate(-1);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });


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
      <div id="wine-detail-top">
        <button id="return-button" onClick={goBack}><BsArrowLeft /></button>
        <h1 id="wine-detail-name">{wine.name}</h1>
      </div>

      <div id="wine-detail-bot">
        <div id="wine-detail-left">
          <img id="wine-detail-img" src={wine.image} alt="Wine in a glass" />
        </div>

        <div id="wine-detail-right">
          <div>
            <p id="wine-detail-taste">{wine.taste}</p>
          </div>

          <div>
            <p id="wine-detail-label">Alcohol Content</p>
            <span id="wine-detail-text">{wine.alcohol_content}%</span>
          </div>

          <div>
              <p id="wine-detail-label">Allergens</p>
              <p id="wine-detail-text">{wine.allergens}</p>
          </div>

          <div>
              <p id="wine-detail-label">Conservation</p>
              <p id="wine-detail-text">{wine.conservation}</p>
          </div>

          <div>
              <p id="wine-detail-label">Pairing</p>
              <p id="wine-detail-text">{wine.pairing}</p>
          </div>
          <span id="wine-detail-price">${wine.price}</span>
        </div>
      </div>
    </section>
  );
}
