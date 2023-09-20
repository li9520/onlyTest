import React, { useState, ReactNode } from 'react';

import { intervalType } from 'src/config/types';
import { SliderContext } from 'src/contexts';

type SliderProviderProps = {
  children: ReactNode;
};
const SliderProvider = ({ children }: SliderProviderProps) => {
  const [selected, setSelected] = useState<number>(0);
  const [countFrom, setCountFrom] = useState<number>(0);
  const [countTo, setCountTo] = useState<number>(0);
  const [intervalsList, setIntervalsList] = useState<intervalType[] | []>([]);

  const changeSelected = (value: number) => {
    setSelected(value);
    setCountFrom(intervalsList[value]?.points.from);
    setCountTo(intervalsList[value]?.points.to);
  };

  const value = {
    selected,
    countTo,
    countFrom,
    intervalsList,
    changeSelected,
    setIntervalsList,
  };

  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
};

export default SliderProvider;
