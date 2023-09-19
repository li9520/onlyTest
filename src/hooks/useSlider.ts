import { useContext } from 'react';

import { SliderContext } from 'src/contexts';

const useSlider = () => {
  const currentSliderContext = useContext(SliderContext);
  if (!currentSliderContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentSliderContext;
};

export { useSlider };