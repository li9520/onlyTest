import React from 'react';

import cn, { Argument } from 'classnames';

import './curcleButton.scss';

type curcleButtonProps = {
  onClick: React.MouseEventHandler;
  pointName: string;
  active: boolean;
  className: Argument;
};

const CurcleButton: React.FC<curcleButtonProps> = ({ onClick, pointName, active, className }) => {
  const buttonClass = cn('curcleButton', className, { active: active });
  return (
    <div onClick={onClick} className={buttonClass}>
      <div className="curcleButton__content">
        <div>{pointName}</div>
      </div>
    </div>
  );
};

export default CurcleButton;
