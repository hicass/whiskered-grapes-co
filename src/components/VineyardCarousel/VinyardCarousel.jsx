import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './VineyardCarousel.css';
import vineyard1 from '../../assets/images/VineyardPage/vineyard-1.jpg';
import vineyard2 from '../../assets/images/VineyardPage/vineyard-2.jpg';
import tour2 from '../../assets/images/WineTourPage/tour-2.jpg';
import tour3 from '../../assets/images/WineTourPage/tour-3.jpg';


export default function VineyardCarousel() {
  return (
    <section id="vineyard-carousel">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        style={{
            '--swiper-navigation-color': '#fffcf7',
            '--swiper-pagination-color': '#fffcf7',
          }}
        modules={[EffectFade, Navigation, Pagination]}
        className="vineyardSwiper"
      >
        <SwiperSlide>
            <img className="vineyard-carousel-img" src={vineyard1} alt="Green vineyard" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="vineyard-carousel-img" src={vineyard2} alt="Green vineyard" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="vineyard-carousel-img" src={tour2} alt="Green vineyard" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="vineyard-carousel-img" src={tour3} alt="Green vineyard" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
