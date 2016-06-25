import React, { Component, PropTypes } from 'react';
import Close from 'components/icons/X';
import styles from './Modal.css';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    close: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { children, className, close } = this.props;

    return (
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
  }
}

export default Modal;
