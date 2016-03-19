import React, { PropTypes } from 'react';
import Close from 'components/icons/X';
import styles from './Modal.css';

const Modal = ({ children }) => (
  <div className={styles.base}>
    <div className={styles.overlay}></div>
    <div className={styles.main}>
      <Close
        className={styles.close}
        fill="#333"
        size={20}
      />
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
