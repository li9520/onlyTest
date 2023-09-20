import React, { createContext } from 'react';

import { intervalType } from 'src/config/types';

export type SliderContextType = {
  selected: number;
  //setSelected: React.Dispatch<React.SetStateAction<number>>;
  countFrom: number;
  //setCountFrom: React.Dispatch<React.SetStateAction<number>>;
  countTo: number;
  //setCountTo: React.Dispatch<React.SetStateAction<number>>;
  intervalsList: intervalType[] | [];
  changeSelected: (value: number) => void;
  setIntervalsList: React.Dispatch<React.SetStateAction<intervalType[]>>;
};

const SliderContext = createContext<SliderContextType | null>(null);

export { SliderContext };
