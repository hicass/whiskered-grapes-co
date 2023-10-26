import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Slide } from 'react-awesome-reveal';
import './NewReleases.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function NewReleases({ wineList }) {
  const selectedWines = wineList.slice(0, 4);

  const wineCards = selectedWines.map((wine) => (
    <SwiperSlide className="slide">
      <div className="wine-card-container">
        <h4 className="wine-card-name">{wine.name}</h4>
        <img src={wine.image} className="wine-card-img" alt="Wine in glass" />
        <p className="wine-item-description">{wine.taste}</p>
        <Link to={`/wine/${wine._id}`} state={{ wineId: wine._id }}>
          <button class="cta">
            <span class="hover-underline-animation">Learn More</span>
            <svg
              viewBox="0 0 46 16"
              height="8"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </SwiperSlide>
  ));

  return (
    <section id="new-releases">
      <Slide direction="right" triggerOnce="true">
        <h2 className="about-h2" id="releases-h2">New Releases</h2>
        <p className="about-story-txt" id="releases-txt">Explore our latest releases, each one a unique journey for your taste buds.</p>
        <Swiper
          style={{
            '--swiper-navigation-color': '#483e37',
            '--swiper-pagination-color': '#483e37',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          slidesPerView={2.5}
          spaceBetween={30}
          navigation={true}
          grabCursor={true}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper test"
        >
          {wineCards}
        </Swiper>
      </Slide>
    </section>
  );
}
