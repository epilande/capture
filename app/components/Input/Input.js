import React, { PropTypes } from 'react';

const Input = ({ id, className, type, placeholder, value, onChange, onKeyDown }) => {
  return (
    <input id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onKeyDown: React.PropTypes.func
};

export default Input;
