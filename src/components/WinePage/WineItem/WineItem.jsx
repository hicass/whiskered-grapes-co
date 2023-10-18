import { Link } from 'react-router-dom';
import './WineItem.css';

export default function WineItem({ wine }) {
  return (
    <div className="inner-wine-item-content">
      <h3 className="wine-item-name">{wine.name}</h3>
      <img className="wine-item-img" src={wine.image} alt="Wine" />

      <div className="wine-item-bot">
        <p className="wine-item-description">{wine.taste}</p>

        <Link
          className="wine-item-link"
          to={`/wine/${wine._id}`}
          state={{ wineId: wine._id }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
