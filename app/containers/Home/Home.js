import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { download } from 'actions/download';
import { setOutputDir, changeQuality } from 'actions/settings';
import styles from './Home.css';
import Input from 'components/Input';
import List from 'components/List';
import Modal from 'components/Modal';
import Dropdown from 'components/Dropdown';
import Gear from 'components/icons/Gear';
import { validUrl } from 'utils/validation';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    settings: PropTypes.shape({
      output: PropTypes.string,
      quality: PropTypes.string,
    }),
    download: PropTypes.object,
  };

  constructor() {
    super();
    this._onInputChange = this._onInputChange.bind(this);
    this._onInputEnter = this._onInputEnter.bind(this);
    this._openSettings = this._openSettings.bind(this);
    this._closeSettings = this._closeSettings.bind(this);
    this._changeQuality = this._changeQuality.bind(this);
    this._setOutput = this._setOutput.bind(this);
    this._openOutput = this._openOutput.bind(this);
    this.state = {
      inputValue: '',
      inputValid: true,
      openSettings: false,
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
        const { output, quality } = this.props.settings;
        this.props.dispatch(download(url, { quality }, output));
        this.setState({ inputValue: '' });
      } else {
        this.setState({ inputValid: false });
      }
    }
  }

  _openSettings() {
    this.setState({ openSettings: true });
  }

  _closeSettings() {
    this.setState({ openSettings: false });
  }

  _changeQuality(event) {
    this.props.dispatch(changeQuality(event.target.value));
  }

  _setOutput() {
    const dialog = require('remote').dialog;
    const dir = dialog.showOpenDialog({ properties: ['openDirectory', 'createDirectory'] });

    if (dir) {
      this.props.dispatch(setOutputDir(...dir));
    }
  }

  _openOutput() {
    const shell = require('electron').shell;
    const { settings: { output } } = this.props;

    shell.showItemInFolder(output);
  }

  render() {
    const {
      download: { items },
      settings: { output, quality, qualityOption },
    } = this.props;

    let settingsModal;
    if (this.state.openSettings) {
      settingsModal = (
        <Modal className={styles.modal} close={this._closeSettings}>
          <div>
            <h2>Settings</h2>
            <h3>Output</h3>
            <div className={styles.outputInput}>
              <Input
                className={styles.input}
                value={output}
                disabled={true}
              />
              <button onClick={this._setOutput}>Change...</button>
            </div>
            <h3>Quality</h3>
            <Dropdown
              items={qualityOption}
              selected={quality}
              onChange={this._changeQuality}
            />
          </div>
        </Modal>
      );
    }

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
            onClick={this._openSettings}
          />
          <p className={styles.inputError}>
            { !this.state.inputValid ? 'Url is invalid' : ''}
          </p>
          <p className={styles.outputDir} onClick={this._openOutput}>
            output: { output }
          </p>
        </div>
        <List items={items} />
        {settingsModal}
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
