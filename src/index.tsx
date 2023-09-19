import * as React from 'react';

import { createRoot } from 'react-dom/client';
import SliderProvider from './providers/SliderProvider';

import App from './App';
import './styles/styles.scss';

const root = createRoot(document.getElementById('root') as HTMLElement) ;
root.render(
  <SliderProvider>
    <App/>
  </SliderProvider>
);

if (module.hot) {
  module.hot.accept();
}