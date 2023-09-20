import React from 'react';

import cn, { Argument } from 'classnames';

import './title.scss';

type titleProps = {
  text: string;
  classname: Argument;
};

const Title: React.FC<titleProps> = ({ text, classname }) => {
  const titleClasses = cn('title', classname);
  return <h1 className={titleClasses}>{text}</h1>;
};

export default Title;
