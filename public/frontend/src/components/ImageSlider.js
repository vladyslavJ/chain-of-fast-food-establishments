import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CustomArrow from './CustomArrow';
import '../styles/components/ImageSlider.css';

const ImageSlider = (props) => {
  return (
    <div
      className={`${props.className ? props.className + ' ' : ''}image-slider`}
    >
      <Swiper
        className="image-slider__swiper"
        modules={[Navigation, Keyboard]}
        navigation={{
          prevEl: '.image-slider__arrow--prev',
          nextEl: '.image-slider__arrow--next',
        }}
        keyboard={{ enabled: true }}
        loop={true}
        slidesPerView={1}
      >
        {props.images.map((image, index) => (
          <SwiperSlide className="image-slider__item" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="image-slider__swiper-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomArrow
        className="image-slider__arrow image-slider__arrow--prev"
        arrowType="prev"
        isPrimary={true}
      />
      <CustomArrow
        className="image-slider__arrow image-slider__arrow--next"
        arrowType="next"
        isPrimary={true}
      />
    </div>
  );
};

export default ImageSlider;
