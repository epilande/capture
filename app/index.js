import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from 'routes';
import configureStore from 'store/configureStore';
import { setOutputDir } from 'actions/settings';
import { ipcRenderer } from 'electron';
import 'styles/app.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

ipcRenderer.on('downloads-dir', (event, dir) => {
  // set default output dir to ~/Downloads
  if (!store.getState().settings.output) {
    store.dispatch(setOutputDir(dir));
  }
});
