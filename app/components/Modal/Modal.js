import React, { PropTypes } from 'react';
import Close from 'components/icons/X';
import styles from './Modal.css';

const Modal = ({ children, className, close }) => (
  <div className={className}>
    <div className={styles.overlay}></div>
    <div className={styles.main}>
      <Close
        className={styles.close}
        fill="#333"
        opacity={0.25}
        size={20}
        onClick={close}
      />
      {children}
    </div>
  </div>
);

Modal.defaultProps = {
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  close: PropTypes.func.isRequired,
};

export default Modal;
