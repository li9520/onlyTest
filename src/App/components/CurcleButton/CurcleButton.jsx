import React from "react";
import cn from 'classnames';

import './styles.scss';

const CurcleButton = ({
  onClick, 
  pointName, 
  active,
  className
}) => {
  const buttonClass = cn(
    "curcleButton",
    className,
    {active: active,}
  )
  return (
    <div 
        onClick={onClick}
        className={buttonClass}
    >
      <div className="curcleButton__content">
        {<p>{pointName}</p>}
      </div>
    </div>
  )
}

export default CurcleButton;

