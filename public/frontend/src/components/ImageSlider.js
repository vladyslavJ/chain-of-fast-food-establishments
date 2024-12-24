import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/components/ImageSlider.css';
import CustomArrow from './CustomArrow';

// needs to remove

const ImageSlider = (props) => {
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrov: <CustomArrow className="image-slider__arrow" arrowType="prev" />,
    nextArrow: <CustomArrow className="image-slider__arrow" arrowType="next" />,
  };

  return (
    <div className={`${props.className ? props.className + ' ' : ''}image-slider`}>
      <Slider {...settings}>
        {props.images.map((image, index) => (
          <div key={index} className="image-slider__item">
            <img
              src={image.src}
              alt={image.alt}
              className="image-slider__item-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
