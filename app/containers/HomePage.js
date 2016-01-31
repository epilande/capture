import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText } from '../actions/download';
import Input from '../components/Input';

class HomePage extends Component {
  constructor() {
    super();
    this._onInputChange = this._onInputChange.bind(this);
  }

  _onInputChange(event) {
    this.props.dispatch(updateText(event.target.value));
  }

  render() {
    return (
      <Input onChange={this._onInputChange} />
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

export default connect(mapStateToProps)(HomePage);
