import React, {useEffect} from "react";

import Menu from "./components/Menu"
import Title from "./components/Title";
import './app.scss';
import Slider from "./components/SliderWrapper";
import { useSlider } from 'src/hooks/useSlider';
import { timeIntervals } from "src/config/data";

const App = () => {
  const { intervalsList, setIntervalsList } = useSlider();

  useEffect(() => {
    setIntervalsList(timeIntervals);
  },[]);

  if (intervalsList.length === 0) return null;
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__content">
          <Title text={'Исторические даты'} classname={'app__title'} />
          <Menu />
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default App;