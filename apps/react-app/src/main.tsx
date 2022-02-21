import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { applyPolyfills, defineCustomElements } from '@tera-sd/core/loader';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => { 
  defineCustomElements();
});