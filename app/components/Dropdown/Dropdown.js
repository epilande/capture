import React, { PropTypes } from 'react';
import styles from './Dropdown.css';

const Dropdown = ({ className, name, items, value, onChange }) => (
  <div className={styles.base}>
    <select name={name}
      className={className}
      value={value}
      onChange={onChange}
    >
      {items.map(item => (
        <option value={item.value}>{item.text}</option>
      ))}
    </select>
  </div>
);

Dropdown.defaultProps = {
  items: [],
};

Dropdown.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Dropdown;
