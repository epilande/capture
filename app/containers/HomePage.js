import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText } from 'actions/download';
import Input from 'components/Input';
import List from 'components/List';

class HomePage extends Component {
  constructor() {
    super();
    this._onInputChange = this._onInputChange.bind(this);
    this._onInputEnter = this._onInputEnter.bind(this);
    this.state = {
      inputValue: ''
    }
  }

  _onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  _onInputEnter(event) {
    const text = event.target.value.trim()

    if (text && event.which === 13) {
      this.props.dispatch(updateText(text));
      this.setState({ inputValue: '' })
    }
  }

  render() {
    return (
      <div>
        <h1>Capture</h1>
        <Input
          onChange={this._onInputChange}
          onKeyDown={this._onInputEnter}
          value={this.state.inputValue}
        />
        <List />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    download: state.download
  };
}

export default connect(mapStateToProps)(HomePage);
