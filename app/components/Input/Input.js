import React, { Component, PropTypes } from 'react';
import { validUrl } from 'utils/validation';

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

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);

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

  onEnter(event) {
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
    const { value } = this.state;

    return (
      <div>
        <input
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          value={value}
          {...props}
        />
      </div>
    );
  }
}

export default Input;
