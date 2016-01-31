import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from 'actions/download';
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
    const url = event.target.value.trim()

    if (url && event.which === 13) {
      this.props.dispatch(addItem(url));
      this.setState({ inputValue: '' })
    }
  }

  render() {
    const { download: { items } } = this.props;

    return (
      <div>
        <h1>Capture</h1>
        <Input
          onChange={this._onInputChange}
          onKeyDown={this._onInputEnter}
          value={this.state.inputValue}
        />
        <List items={items} />
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
