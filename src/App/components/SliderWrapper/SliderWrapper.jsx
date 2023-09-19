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
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderBtnIcon } from "./icons";

const SliderWrapper = () => {
  const { intervalsList, selected, setSelected, setCountFrom, setCountTo } = useSlider();
  const sliderRef = useRef(null);
  
  const handleChange = (swiper) => {
    console.log(swiper.activeIndex, selected);
    if(swiper.activeIndex === selected) return;

    setSelected(swiper.activeIndex);
    setCountFrom(intervalsList[swiper.activeIndex].points.from);
    setCountTo(intervalsList[swiper.activeIndex].points.to);
  }

  useEffect(() => {
    if(!sliderRef.current) return;
    if(sliderRef.current.swiper.activeIndex === selected) return;
    sliderRef.current.swiper.slideTo(selected);
  }, [selected])

  return (
    <Swiper
      ref={sliderRef}
      slidesPerView={1}
      spaceBetween={30}
      //navigation={true}
      navigation= {{
        nextEl: ".swiperbutton-next",
        prevEl: ".swiperbutton-prev",
      }}
      modules={[Navigation, EffectFade]}
      effect={'fade'}
      fadeEffect = {{
        crossFade: true
      }}
      onSlideChange={handleChange}
      className="sliderWrapper"

      allowTouchMove= {false}
    >
      {
        intervalsList.map(({id, events}) => {
          return (
            <SwiperSlide key={id}>
              {<NestedSlider events={Object.entries(events)}/>}            
            </SwiperSlide>
          )
        })
      }
      <div class="swiperFraction">{`${String(selected + 1).padStart(2, 0)} / ${String(intervalsList .length).padStart(2, 0)}`}</div>
      <div class="swiperbutton-prev"><SliderBtnIcon /></div>
      <div class="swiperbutton-next"><SliderBtnIcon /></div>
    </Swiper>
  )
}

export default SliderWrapper;