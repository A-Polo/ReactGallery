import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import injectSheet from 'react-jss';
import styles from './styles';

import RootStore from './stores';
import GalleyContent from './GalleyContent';

const rootStore = new RootStore();

const Gallery = ({ classes }) => (
  <Provider store={rootStore}>
    <GalleyContent classes={classes} />
  </Provider>
);

Gallery.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};


export default injectSheet(styles)(Gallery);
