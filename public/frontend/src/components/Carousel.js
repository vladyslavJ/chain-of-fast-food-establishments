import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import CustomArrow from './CustomArrow';
import '../styles/components/Carousel.css';

const Carousel = ({ className, children }) => {
  return (
    <div className={`${className ? className : ''} carousel`}>
      <Swiper
        className="carousel__swiper"
        modules={[Navigation, Keyboard, EffectCoverflow]}
        effect="coverflow"
        // centeredSlides={true}
        slidesPerView="3"
        loop={true}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: '.carousel__arrow--next',
          prevEl: '.carousel__arrow--prev',
        }}
        coverflowEffect={{
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        }}
      >
        {children &&
          Children.map(children, (child, index) => (
            <SwiperSlide key={index} className="carousel__item">
              {child}
            </SwiperSlide>
          ))}
      </Swiper>
      <CustomArrow
        className="carousel__arrow carousel__arrow--prev"
        arrowType="prev"
        isPrimary={true}
      />
      <CustomArrow
        className="carousel__arrow carousel__arrow--next"
        arrowType="next"
        isPrimary={true}
      />
    </div>
  );
};

export default Carousel;
