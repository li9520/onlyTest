import React from "react";
import cn from 'classnames';

import './curcleButton.scss';

const CurcleButton = ({
  onClick, 
  pointName, 
  active,
  type,
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
        <div>{pointName}</div>
      </div>
    </div>
  )
}

export default CurcleButton;

