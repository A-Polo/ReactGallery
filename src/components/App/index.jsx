import React from 'react';
import PropTypes from 'prop-types';
import injectSheet, { ThemeProvider } from 'react-jss';

import themeStyles from '../../assets/theme/theme';
import '../../assets/styles/global.scss';

import Header from '../Header';
import Gallery from '../Gallery';

const styles = theme => ({
  app: {
    background: 'rgba(196,196,196,0.1)',
    display: theme.flex,
    flexDirection: theme.direction,
    height: '100vh',
  },
});

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <Gallery />
  </div>
);

const StyleComp = injectSheet(styles)(App);

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default () => (
  <ThemeProvider theme={themeStyles}>
    <StyleComp />
  </ThemeProvider>
);

