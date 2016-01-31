import React, { PropTypes } from 'react';

const Input = ({id, className, onChange, placeholder, type}) => {
  return (
    <input id={id}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  onChange: () => {},
  id: ''
};

Input.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default Input;
