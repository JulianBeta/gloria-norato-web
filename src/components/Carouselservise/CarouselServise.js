import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../../styles/Slider.css'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import slide_image_1 from './../../assets/image/1.jpg'
import slide_image_2 from './../../assets/image/2.jpg';
import slide_image_3 from './../../assets/image/3.jpg';
import slide_image_4 from './../../assets/image/4.jpg';
import slide_image_5 from './../../assets/image/5.jpg';
import slide_image_6 from './../../assets/image/6.jpg';
import slide_image_7 from './../../assets/image/7.jpg';

export const Slider2 = () => {
  return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'2'}
        touchAngle={0}
        touchEventsTarget='container'
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 2,
          stretch: 5,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
               
        <SwiperSlide>
        <a href='http://localhost:5173/concursos'/>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        <a href='http://localhost:5173/concursos'/>
          <img  src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide> */}

        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      
        
    
  );
}

export default Slider2;