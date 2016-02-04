import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from 'actions/download';
import styles from './Home.css';
import Input from 'components/Input';
import List from 'components/List';
import { validUrl } from 'utils/validation';

class Home extends Component {
  constructor() {
    super();
    this._onInputChange = this._onInputChange.bind(this);
    this._onInputEnter = this._onInputEnter.bind(this);
    this.state = {
      inputValue: ''
    };
  }

  _onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  _onInputEnter(event) {
    const url = event.target.value.trim();

    if (event.which === 13 && url) {
      if (validUrl(url)) {
        this.props.dispatch(addItem(url));
        this.setState({ inputValue: '' });
      } else {
        // display error message
      }
    }
  }

  render() {
    const { download: { items } } = this.props;

    return (
      <div className={styles.base}>
        <div className={styles.inputContainer}>
          <Input
            className={styles.input}
            placeholder="URL to capture video"
            onChange={this._onInputChange}
            onKeyDown={this._onInputEnter}
            value={this.state.inputValue}
          />
        </div>
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

export default connect(mapStateToProps)(Home);
