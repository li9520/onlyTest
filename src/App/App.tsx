import React, { useEffect } from 'react';

import { timeIntervals } from 'src/config/data';
import { useSlider } from 'src/hooks/useSlider';

import Menu from './components/Menu';
import Slider from './components/SliderWrapper';
import Title from './components/Title';
import './app.scss';

const defaultSelected = 0;
const App = () => {
  const { setIntervalsList, intervalsList, changeSelected } = useSlider();

  useEffect(() => {
    setIntervalsList(timeIntervals);
    changeSelected(defaultSelected);
  }, []);

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
  );
};

export default App;
