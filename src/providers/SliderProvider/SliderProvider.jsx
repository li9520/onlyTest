import React, { useEffect,  useState } from "react";
import { SliderContext } from "src/contexts";

const initSelected = 2;

const SliderProvider = ({children}) => {
  const [selected, setSelected] = useState(initSelected);
  const [countFrom, setCountFrom] = useState();
  const [countTo, setCountTo] = useState();
  const [intervalsList, setIntervalsList] = useState([]);

  const value = {selected, setSelected, countFrom, setCountFrom, countTo, setCountTo, intervalsList, setIntervalsList};

  return (
    <SliderContext.Provider value={value}>
      {children}
    </SliderContext.Provider>
  );
}

export default SliderProvider;