import React from 'react';

import CurclePagination from '../CurclePagination';
import YearCounter from '../YearCounter';
import { useSlider } from 'src/hooks/useSlider';
 
import './menu.scss';


const Menu = () => {
  const { setSelected, selected, countFrom, setCountFrom, countTo, setCountTo, intervalsList} = useSlider();
  const handleClick = (index: number) => (e: React.SyntheticEvent) => {
    setSelected(index);
    setCountFrom(intervalsList[index].points.from);
    setCountTo(intervalsList[index].points.to);
  }

  const activeType = intervalsList[selected].type;
  return (
    <div className='menu'>
      <YearCounter defaultValue={intervalsList[0].points.from} value={countFrom}  className={"menu__text"}/>
      <YearCounter defaultValue={intervalsList[0].points.to} value={countTo}  className={"menu__text"}/>
      <CurclePagination onClick={handleClick} points={intervalsList}/>
      <p className='menu__activeType'>{activeType}</p>
    </div>
  );
}

export default Menu;
