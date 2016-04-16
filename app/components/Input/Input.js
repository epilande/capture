import React, { Component, PropTypes } from 'react';

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
  }

  onEnter(event) {
  }

  render() {
    const { ...props } = this.props;
    const { value } = this.state;

    return (
      <div>
        <input
          value={value}
          {...props}
        />
      </div>
    );
  }
}

export default Input;
