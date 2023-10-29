import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './VineyardCarousel.css';
import vineyard1 from '../../assets/images/VineyardPage/vineyard-1.jpg';
import vineyard2 from '../../assets/images/VineyardPage/vineyard-2.jpg';
import vineyard3 from '../../assets/images/VineyardPage/vineyard-3.jpg';
import vineyard4 from '../../assets/images/VineyardPage/vineyard-4.jpg';
import vineyard5 from '../../assets/images/VineyardPage/vineyard-5.jpg';


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
            <img className="vineyard-carousel-img" src={vineyard3} alt="Green vineyard" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="vineyard-carousel-img" src={vineyard4} alt="Green vineyard" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="vineyard-carousel-img" src={vineyard5} alt="Green vineyard" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
