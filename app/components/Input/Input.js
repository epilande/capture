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
    const { onChange } = this.props;

    if (onChange) {
      onChange(event);
    } else {
      this.setState({
        value: event.target.value,
        valid: true,
      });
    }
  }

  onKeyDown(event) {
    const { onKeyDown } = this.props;

    if (onKeyDown) {
      onKeyDown(event);
    } else {
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
  }

  render() {
    const { ...props } = this.props;
    const { value } = this.state;

    return (
      <div>
        <input
          className={styles.input}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={value}
          {...props}
        />
      </div>
    );
  }
}

export default Input;
