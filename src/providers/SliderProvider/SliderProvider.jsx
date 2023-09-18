import React, { useEffect,  useState } from "react";
import { SliderContext } from "src/contexts";
import { timeIntervals } from "src/config/data";

const initSelected = 2;

const SliderProvider = ({children}) => {
  const [selected, setSelected] = useState(initSelected);
  const [countFrom, setCountFrom] = useState();
  const [countTo, setCountTo] = useState();
  const [intervalsList, setIntervalsList] = useState([]);

  useEffect(() => {
    setIntervalsList(timeIntervals);
  },[])

  const value = {selected, setSelected, countFrom, setCountFrom, countTo, setCountTo, intervalsList};

  return (
    <SliderContext.Provider value={value}>
      {children}
    </SliderContext.Provider>
  );
}

export default SliderProvider;