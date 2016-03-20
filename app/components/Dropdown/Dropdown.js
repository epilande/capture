import React, { PropTypes } from 'react';
import styles from './Dropdown.css';

const Dropdown = ({ className, name, items, value, selected, onChange }) => (
  <div className={styles.base}>
    <select name={name}
      className={className}
      value={value}
      defaultValue={selected}
      onChange={onChange}
    >
      {items.map((item, i) => (
        <option key={i} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
    <span className={styles.arrow}></span>
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
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

export default Dropdown;
