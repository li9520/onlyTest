import React from "react";
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import _ from 'lodash';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 import './nestedSlider.scss';

const NestedSlider = ({events}) => {
  return (
    <Swiper
      nested={true}
      slidesPerView={3}
      navigation={true}
      spaceBetween={"80px"}
      modules={[Navigation]}
      className="nestedSlider"
    >
      {events.map((event) => {
        const [year, text] = event;
        return (
          
          <SwiperSlide key={_.uniqueId()}>
            <h2>{year}</h2>
            <p>{text}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
  
}

export default NestedSlider;