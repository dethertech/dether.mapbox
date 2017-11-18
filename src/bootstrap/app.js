import React from 'react';
import { Provider } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';

import generateStore from './generateStore';
import config from './config';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';

import '../styles/index.css';

/**
 * Init app
 */
const App = () => (
  <Provider store={generateStore(config.env)}>
    <Router />
  </Provider>
);

registerServiceWorker();

export default App;
