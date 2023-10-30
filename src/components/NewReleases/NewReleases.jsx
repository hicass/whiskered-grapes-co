import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Slide } from 'react-awesome-reveal';
import AccentLink from '../AccentLink/AccentLink';
import './NewReleases.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function NewReleases({ wineList }) {
  const selectedWines = wineList.slice(0, 4);

  const wineCards = selectedWines.map((wine) => (
    <SwiperSlide className="slide" key={wine._id}>
      <div className="wine-card-container">
        <h4 className="wine-card-name">{wine.name}</h4>
        <img src={wine.image} className="wine-card-img" alt="Wine in glass" />
        <p className="wine-item-description">{wine.taste}</p>
        <Link to={`/wine/${wine._id}`} state={{ wineId: wine._id }}>
          <AccentLink linkText={'Learn More'} />
        </Link>
      </div>
    </SwiperSlide>
  ));

  return (
    <section id="new-releases">
      <Slide direction="right" triggerOnce="true">
        <h2 className="about-h2" id="releases-h2">
          New Releases
        </h2>
        <p className="about-story-txt" id="releases-txt">
          Explore our latest releases, each one a unique journey for your taste
          buds.
        </p>
        <Swiper
          style={{
            '--swiper-navigation-color': '#483e37',
            '--swiper-pagination-color': '#483e37',
          }}
          slidesPerView={2.5}
          spaceBetween={30}
          navigation={true}
          grabCursor={true}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          className="wineSwiper"
        >
          {wineCards}
        </Swiper>
      </Slide>
    </section>
  );
}
