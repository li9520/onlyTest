import React, { useState, ReactNode} from "react";
import { intervalType } from "src/config/types";
import { SliderContext } from "src/contexts";

const initSelected = 2;

type SliderProviderProps = {
  children : ReactNode,
}
const SliderProvider = ({children}: SliderProviderProps) => {
  const [selected, setSelected] = useState<number>(initSelected);
  const [countFrom, setCountFrom] = useState<number>(0);
  const [countTo, setCountTo] = useState<number>(0);
  const [intervalsList, setIntervalsList] = useState<intervalType[] | []>([]);

  const value = {selected,countTo, countFrom, intervalsList, setSelected, setCountFrom, setCountTo, setIntervalsList };

  return (
    <SliderContext.Provider value={value}>
      {children}
    </SliderContext.Provider>
  );
}

export default SliderProvider;