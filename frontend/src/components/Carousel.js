import { Children, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import CustomArrow from './CustomArrow';
import '../styles/components/Carousel.css';

const Carousel = ({ className, children }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={`${className ? className : ''} carousel`}>
			<Swiper
				className="carousel__swiper"
				modules={[Navigation, Keyboard]}
				centeredSlides={true}
				slidesPerView="3"
				loop={true}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				keyboard={{
					enabled: true,
				}}
				navigation={{
					nextEl: '.carousel__arrow--next',
					prevEl: '.carousel__arrow--prev',
				}}
				breakpoints={{
					700: { slidesPerView: 1 },
					1024: { slidesPerView: 3 },
				}}
			>
				{children &&
					Children.map(children, (child, index) => (
						<SwiperSlide
							key={index}
							className={`carousel__item ${
								activeIndex === index
									? ''
									: 'carousel__item--inactive'
							}`}
							style={
								activeIndex !== index
									? { transform: 'scale(0.85)' }
									: {}
							}
						>
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
