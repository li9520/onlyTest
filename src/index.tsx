import * as React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
import SliderProvider from './providers/SliderProvider';

import './styles/styles.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <SliderProvider>
    <App />
  </SliderProvider>
);

if (module.hot) {
  module.hot.accept();
}
