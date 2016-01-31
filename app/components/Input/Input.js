import React, { PropTypes } from 'react';

const Input = ({ id, className, type, placeholder, onChange, onKeyDown }) => {
  return (
    <input id={id}
      className={className}
      type={type}
      placeholder={placeholder}
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
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onKeyDown: React.PropTypes.func
};

export default Input;
