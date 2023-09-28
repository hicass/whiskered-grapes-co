import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import './WineItem.css';

export default function WineItem({ wine }) {
  return (
    <>
      <Fade fraction="0.8">
        <h3 className="wine-item-name">{wine.name}</h3>
      </Fade>
      <img className="wine-item-img" src={wine.image} alt="Wine" />
      <Fade fraction="0.8">
        <p className="wine-item-description">{wine.taste}</p>
      </Fade>
      <Link className="wine-item-link" to={`/wine/${wine._id}`} state={{ wineId: wine._id }}>
        Learn More
      </Link>
    </>
  );
}
