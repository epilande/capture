import React, { Component, PropTypes } from 'react';
import { validUrl } from 'utils/validation';
import styles from './Input.css';

class Input extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.state = {
      value: props.value || '',
      valid: true,
    };
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      valid: true,
    });
  }

  onKeyDown(event) {
    const url = event.target.value.trim();

    if (event.which === 13 && url) {
      if (validUrl(url)) {
        this.props.onEnter(url);
        this.setState({ value: '' });
      } else {
        this.setState({ valid: false });
      }
    }
  }

  render() {
    const { ...props } = this.props;
    const { value, valid } = this.state;

    let errors;
    if (!valid) {
      errors = (
        <p className={styles.inputError}> Url is invalid </p>
      );
    }

    return (
      <div>
        <input
          className={styles.input}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={value}
          {...props}
        />
        {errors}
      </div>
    );
  }
}

export default Input;
