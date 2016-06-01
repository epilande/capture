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

  constructor(props) {
    super(props);
    this._onInputEnter = this._onInputEnter.bind(this);
    this._toggleSettings = this._toggleSettings.bind(this);
    this._changeQuality = this._changeQuality.bind(this);
    this._setOutput = this._setOutput.bind(this);
    this._openOutput = this._openOutput.bind(this);
    this.state = {
      openSettings: false,
    };
  }

  _onInputEnter(url) {
    const { output, quality } = this.props.settings;
    this.props.dispatch(download(url, { quality }, output));
  }

  _toggleSettings() {
    this.setState({ openSettings: !this.state.openSettings });
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
      download: { items, error },
      settings: { output, quality, qualityOption },
    } = this.props;

    let settingsModal;
    if (this.state.openSettings) {
      settingsModal = (
        <Modal className={styles.modal} close={this._toggleSettings}>
          <div>
            <h2>Settings</h2>
            <h3>Output</h3>
            <div className={styles.outputInput}>
              <Input
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

    let errorMarkup;
    if (error) {
      errorMarkup = <p className={styles.downloadErr}>{error}</p>;
    }

    return (
      <div className={styles.base}>
        <div className={styles.inputContainer}>
          <Input
            placeholder="URL to capture"
            onEnter={this._onInputEnter}
          />
          <Gear
            className={styles.gear}
            fill="#333"
            opacity={0.25}
            onClick={this._toggleSettings}
          />
          <p className={styles.outputDir} onClick={this._openOutput}>
            output: { output }
          </p>
        </div>
        <List items={items} />
        {errorMarkup}
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
