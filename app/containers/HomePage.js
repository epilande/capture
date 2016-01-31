import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText } from 'actions/download';
import Input from 'components/Input';

class HomePage extends Component {
  constructor() {
    super();
    this._onInputEnter = this._onInputEnter.bind(this);
  }

  _onInputEnter(event) {
    const text = event.target.value.trim()

    if (event.which === 13) {
      this.props.dispatch(updateText(event.target.value));
    }
  }

  render() {
    return (
      <Input onKeyDown={this._onInputEnter} />
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

export default connect(mapStateToProps)(HomePage);
