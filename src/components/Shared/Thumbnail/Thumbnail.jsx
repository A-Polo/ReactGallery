import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './styles';

const Thumbnail = ({
  onClick, onKeyPress, children, classes,
}) => (
  <div className={classes.Album} onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0">
    { children }
  </div>
);

Thumbnail.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default injectSheet(styles)(Thumbnail);
