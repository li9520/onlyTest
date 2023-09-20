import React from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import _ from 'lodash';
import { eventType } from 'src/config/types';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './nestedSlider.scss';

type nestedSliderProps = {
  events: eventType[];
};

const swiperParams = {
  nested: true,
  slidesPerView: 3,
  navigation: true,
  spaceBetween: '80px',
  modules: [Navigation],
};

const NestedSlider = ({ events }: nestedSliderProps) => {
  return (
    <Swiper {...swiperParams} className="nestedSlider">
      {events.map(({ year, event }) => {
        return (
          <SwiperSlide key={_.uniqueId()}>
            <h2>{year}</h2>
            <p>{event}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NestedSlider;
