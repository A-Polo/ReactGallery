import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './styles';

const Button = ({
  children, onClick, disabled, classes,
}) => (
  <button
    className={classes.Button}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  disabled: false,
};

export default injectSheet(styles)(Button);
