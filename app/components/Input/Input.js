import React, { PropTypes } from 'react';

const Input = ({ ...props }) => (
  <input
    {...props}
  />
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
