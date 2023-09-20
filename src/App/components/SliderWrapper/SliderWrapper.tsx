import React, { useEffect, useRef } from 'react';

import 'swiper/scss/effect-fade';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import './sliderWrapper.scss';
import { useSlider } from 'src/hooks/useSlider';
import { Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import { SliderBtnIcon } from './icons';
import NestedSlider from '../NestedSlider';

const SliderWrapper = () => {
  const { intervalsList, selected, changeSelected } = useSlider();
  const sliderRef = useRef<SwiperRef>(null);

  const handleChange = () => {
    if (!sliderRef.current) return;

    const { activeIndex } = sliderRef.current.swiper;
    if (activeIndex === selected) return;
    changeSelected(activeIndex);
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const { activeIndex } = sliderRef.current.swiper;
    if (activeIndex === selected) return;
    sliderRef.current.swiper.slideTo(selected);
  }, [selected]);

  const swiperParams = {
    ref: sliderRef,
    slidesPerView: 1,

    navigation: {
      nextEl: '.sliderWrapper__button-next',
      prevEl: '.sliderWrapper__button-prev',
    },
    modules: [Navigation, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    onSlideChange: handleChange,
    className: 'sliderWrapper',

    allowTouchMove: false,
  };

  return (
    <Swiper {...swiperParams}>
      {intervalsList.map(({ id, events }) => {
        return <SwiperSlide key={id}>{<NestedSlider events={events} />}</SwiperSlide>;
      })}
      <div className="sliderWrapper__fraction">{`${String(selected + 1).padStart(2, '0')} / ${String(
        intervalsList.length
      ).padStart(2, '0')}`}</div>
      <div className="sliderWrapper__button-prev">
        <SliderBtnIcon />
      </div>
      <div className="sliderWrapper__button-next">
        <SliderBtnIcon />
      </div>
    </Swiper>
  );
};

export default SliderWrapper;
