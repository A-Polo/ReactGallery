import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import RootStore from './stores';
import transport from '../../lib/services/transport';
import GalleyContent from './GalleyContent';

const rootStore = new RootStore({ transport });

const Gallery = () => (
  <Provider store={rootStore}>
    <Router>
      <Route component={GalleyContent} />
    </Router>
  </Provider>
);

export default Gallery;
