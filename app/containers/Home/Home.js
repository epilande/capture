import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { download } from 'actions/download';
import { setOutputDir } from 'actions/settings';
import styles from './Home.css';
import Input from 'components/Input';
import List from 'components/List';
import Gear from 'components/icons/Gear';
import { validUrl } from 'utils/validation';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    settings: PropTypes.shape({
      output: PropTypes.string,
    }),
    download: PropTypes.object,
  };

  constructor() {
    super();
    this._onInputChange = this._onInputChange.bind(this);
    this._onInputEnter = this._onInputEnter.bind(this);
    this._setOutput = this._setOutput.bind(this);
    this.state = {
      inputValue: '',
      inputValid: true,
    };
  }

  _onInputChange(event) {
    this.setState({
      inputValue: event.target.value,
      inputValid: true,
    });
  }

  _onInputEnter(event) {
    const url = event.target.value.trim();

    if (event.which === 13 && url) {
      if (validUrl(url)) {
        const { output } = this.props.settings;
        this.props.dispatch(download(url, null, output));
        this.setState({ inputValue: '' });
      } else {
        this.setState({ inputValid: false });
      }
    }
  }

  _setOutput() {
    const dialog = require('remote').dialog;
    const dir = dialog.showOpenDialog({ properties: ['openDirectory', 'createDirectory'] });

    if (dir) {
      this.props.dispatch(setOutputDir(...dir));
    }
  }

  render() {
    const { download: { items } } = this.props;

    return (
      <div className={styles.base}>
        <div className={styles.inputContainer}>
          <Input
            className={styles.input}
            placeholder="URL to capture"
            onChange={this._onInputChange}
            onKeyDown={this._onInputEnter}
            value={this.state.inputValue}
          />
          <Gear
            className={styles.gear}
            fill="#333"
            opacity={0.25}
            onClick={this._setOutput}
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
    download: state.download,
    settings: state.settings,
  };
}

export default connect(mapStateToProps)(Home);
