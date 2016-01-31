import React, { Component } from 'react';
import Home from '../components/Home';
import Input from '../components/Input';

export default class HomePage extends Component {
  render() {
    return (
      <Input onChange={this._onInputChange} />
    );
  }
}
