import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import { BsArrowLeft } from 'react-icons/bs';
import VineyardCarousel from '../../components/VineyardCarousel/VinyardCarousel';
import sommeliersCert from '../../assets/images/WineDetailPage/sommeliers-cert.png';
import organicCert from '../../assets/images/WineDetailPage/organic-cert.png';
import massachusettsCert from '../../assets/images/WineDetailPage/massachusetts-cert.png';
import alcoholIcon from '../../assets/images/WineDetailPage/alcohol-icon.png';
import allergenIcon from '../../assets/images/WineDetailPage/allergen-icon.png';
import pairingIcon from '../../assets/images/WineDetailPage/pairing-icon.png';
import barrelIcon from '../../assets/images/WineDetailPage/barrel-icon.png';
import * as winesAPI from '../../utilities/wines-api';
import './WineDetailPage.css';

export default function WineDetailPage() {
  const [wine, setWine] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

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
        <button id="return-button" onClick={goBack}>
          <BsArrowLeft id="return-arrow" />
        </button>
      </div>

      <div id="wine-detail-mid">
        <Slide triggerOnce="true">
          <div id="wine-detail-left">
            <img id="wine-detail-img" src={wine.image} alt="Wine in a glass" />
          </div>
        </Slide>

        <Slide direction='right' triggerOnce="true">
          <div id="wine-detail-right">
            <div id="wine-detail-intro">
              <h2 id="wine-detail-genre">{wine.genre}</h2>
              <h1 id="wine-detail-name">{wine.name}</h1>
              <p id="wine-detail-taste">{wine.taste}</p>
            </div>

            <div className="wine-detail-mid-info">
              <hr className="thread"/>
              <p className="wine-detail-label">Tasting Note</p>
              <p className="wine-detail-text">{wine.description}</p>
            </div>

            <div className="wine-detail-mid-info">
              <hr className="thread"/>
              <p className="wine-detail-label">Certificates</p>

              <div id="wine-detail-cert-container">
                <img src={sommeliersCert} className="wine-detail-cert" alt="Sommeliers Certificate." />
                <img src={organicCert} className="wine-detail-cert" alt="Organic Certificate." />
                <img src={massachusettsCert} className="wine-detail-cert" alt="Massachusetts state seal." />
              </div>
            </div>

            <div className="wine-detail-mid-info">
              <hr className="thread"/>
              <p className="wine-detail-label">Origin Denomination</p>
              <p className="wine-detail-text">Grape-ville, Massachusetts</p>
            </div>

            <div className="wine-detail-mid-info">
              <hr className="thread"/>
              <p className="wine-detail-label">Elaboration</p>
              <p className="wine-detail-text">Short aging in oak barrels coated in organic beard oil.</p>
            </div>
          </div>
        </Slide>
      </div>

      <Slide direction="up" triggerOnce="true">
        <div id="wine-detail-bot">
          <hr className="thread"/>
          <div id="wine-detail-bot-content">
            <div className="wine-detail-bot-item">
              <img src={alcoholIcon} className="wine-detail-icon" alt="Sparkly wine glass." />
              <p className="wine-detail-label">Alcohol Content</p>
              <span className="wine-detail-text">{wine.alcohol_content}%</span>
            </div>

            <div className="wine-detail-bot-item">
              <img src={allergenIcon} className="wine-detail-icon" alt="Allergens growing from the ground." />
              <p className="wine-detail-label">Allergens</p>
              <p className="wine-detail-text">{wine.allergens}</p>
            </div>

            <div className="wine-detail-bot-item">
              <img src={pairingIcon} className="wine-detail-icon" alt="Artsy plate with a fork and knife on the side." />
              <p className="wine-detail-label">Pairing</p>
              <p className="wine-detail-text">{wine.pairing}</p>
            </div>

            <div className="wine-detail-bot-item">
              <img src={barrelIcon} className="wine-detail-icon" alt="A Barrel." />
              <p className="wine-detail-label">Conservation</p>
              <p className="wine-detail-text">{wine.conservation}</p>
            </div>
          </div>
          <hr className="thread"/>
        </div>
      </Slide>
      <VineyardCarousel />
    </section>
  );
}
