import React, { PropTypes } from 'react';
import styles from './Modal.css';

const Modal = ({ children }) => (
  <div className={styles.base}>
    <div className={styles.overlay}></div>
    <div className={styles.main}>
      {children}
    </div>
  </div>
);

Modal.defaultProps = {
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
