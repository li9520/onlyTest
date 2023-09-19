import React from "react";
import cn from 'classnames';

import './title.scss';

const Title = ({text, classname}) => {
  const titleClasses = cn('title', classname)
  return (
    <h1 className={titleClasses}>{text}</h1>
  )
}

export default Title;