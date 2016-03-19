import React, { PropTypes } from 'react';

const Input = ({ id, className, type, placeholder, value, disabled, onChange, onKeyDown }) => (
  <input id={id}
    className={className}
    type={type}
    placeholder={placeholder}
    value={value}
    disabled={disabled}
    onChange={onChange}
    onKeyDown={onKeyDown}
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
