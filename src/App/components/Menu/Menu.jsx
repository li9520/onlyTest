import React from 'react';

import CurclePagination from '../CurclePagination';
import YearCounter from '../YearCounter';
import { useSlider } from 'src/hooks/useSlider';
 
import './menu.scss';

const FROM_START = 1980;
const TO_START = 1986;

const Menu = () => {
  const { setSelected, selected, countFrom, setCountFrom, countTo, setCountTo, intervalsList} = useSlider();
  const handleClick = (index) => (e) => {
    setSelected(index);
    setCountFrom(intervalsList[index].points.from);
    setCountTo(intervalsList[index].points.to);
  }

  const activeType = intervalsList[selected].type;
  return (
    <div className='menu'>
      {intervalsList.length !== 0 && 
        <>
          <YearCounter defaultValue={FROM_START} value={countFrom}  className={"menu__text"}/>
          <YearCounter defaultValue={TO_START} value={countTo}  className={"menu__text"}/>
          <CurclePagination onClick={handleClick} points={intervalsList}/>
          <p className='menu__activeType'>{activeType}</p>
        </>
      }
      
    </div>
  );
}



export default Menu;
