import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, onClick, disabled }) => (
  <button
    className="Button"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  disabled: false,
};

export default Button;
