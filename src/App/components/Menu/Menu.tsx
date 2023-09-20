import React from 'react';

import CurclePagination from 'appComponents/CurclePagination';
import YearCounter from 'appComponents/YearCounter';
import { useSlider } from 'hooks/useSlider';
import './menu.scss';
const Menu = () => {
  const { changeSelected, selected, countFrom, countTo, intervalsList } = useSlider();
  const handleClick = (index: number) => () => {
    changeSelected(index);
  };

  const activeType = intervalsList[selected].type;
  return (
    <div className="menu">
      <YearCounter defaultValue={intervalsList[0].points.from} value={countFrom} className={'menu__text'} />
      <YearCounter defaultValue={intervalsList[0].points.to} value={countTo} className={'menu__text'} />
      <CurclePagination onClick={handleClick} points={intervalsList} />
      <p className="menu__activeType">{activeType}</p>
    </div>
  );
};

export default Menu;
