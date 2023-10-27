import { Fade } from 'react-awesome-reveal';
import Logo from '../../components/Logo/Logo';
import WineItem from '../../components/WinePage/WineItem/WineItem';
import VineyardCarousel from '../../components/VineyardCarousel/VinyardCarousel';
import './WinePage.css';

export default function WinePage({ wineList }) {
  const wineListItems = wineList.map((wine) => (
    <div className="wine-item-container" key={wine._id}>
      <Fade direction="up" triggerOnce="true">
        <WineItem wine={wine} />
      </Fade>
    </div>
  ));

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
      <VineyardCarousel />
    </section>
  );
}
