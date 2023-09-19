import React, { useEffect, useRef } from "react";

import { useSlider } from "src/hooks/useSlider";
import 'swiper/scss/effect-fade';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import _ from 'lodash';
import NestedSlider from "../NestedSlider";

import './sliderWrapper.scss';

import { Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { SliderBtnIcon } from "./icons";

const SliderWrapper = () => {
  const { intervalsList, selected, setSelected, setCountFrom, setCountTo } = useSlider();
  const sliderRef = useRef<SwiperRef>(null);
  
  const handleChange = () => {
    if (!sliderRef.current) return;
    const {activeIndex} = sliderRef.current.swiper;
    if(activeIndex === selected) return;

    setSelected(activeIndex);
    setCountFrom(intervalsList[activeIndex].points.from);
    setCountTo(intervalsList[activeIndex].points.to);
  }

  useEffect(() => {
    if(!sliderRef.current) return;
    const {activeIndex} = sliderRef.current.swiper;
    if(activeIndex === selected) return;
    sliderRef.current.swiper.slideTo(selected);
  }, [selected])

  const swiperParams = {
    ref: sliderRef,
    slidesPerView: 1,

    navigation: {
      nextEl: ".swiperbutton-next",
      prevEl: ".swiperbutton-prev",
    },
    modules: [Navigation, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    onSlideChange: handleChange,
    className: "sliderWrapper",

    allowTouchMove: false,
  };

  return (
    <Swiper
      {...swiperParams}
    >
      {
        intervalsList.map(({id, events}) => {
          return (
            <SwiperSlide key={id}>
              {<NestedSlider events={events}/>}            
            </SwiperSlide>
          )
        })
      }
      <div className="swiperFraction">{`${String(selected + 1).padStart(2, '0')} / ${String(intervalsList .length).padStart(2, '0')}`}</div>
      <div className="swiperbutton-prev"><SliderBtnIcon /></div>
      <div className="swiperbutton-next"><SliderBtnIcon /></div>
    </Swiper>
  )
}

export default SliderWrapper;