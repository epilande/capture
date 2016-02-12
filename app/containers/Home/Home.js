import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from 'actions/download';
import styles from './Home.css';
import Input from 'components/Input';
import List from 'components/List';
import Gear from 'components/icons/Gear';
import { validUrl } from 'utils/validation';

class Home extends Component {
  constructor() {
    super();
    this._onInputChange = this._onInputChange.bind(this);
    this._onInputEnter = this._onInputEnter.bind(this);
    this.state = {
      inputValue: '',
      inputValid: true
    };
  }

  _onInputChange(event) {
    this.setState({
      inputValue: event.target.value,
      inputValid: true
    });
  }

  _onInputEnter(event) {
    const url = event.target.value.trim();

    if (event.which === 13 && url) {
      if (validUrl(url)) {
        this.props.dispatch(addItem(url));
        this.setState({ inputValue: '' });
      } else {
        this.setState({ inputValid: false });
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
          <Gear
            className={styles.gear}
            fill="#333"
            opacity={0.25}
          />
          <p className={styles.inputError}>
            { !this.state.inputValid ? 'Url is invalid' : ''}
          </p>
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
