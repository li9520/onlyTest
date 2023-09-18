import { useContext } from 'react';

import { SliderContext } from 'src/contexts';

const useSlider = () => useContext(SliderContext);

export { useSlider };