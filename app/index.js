import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';
import configureStore from 'store/configureStore';
import { setOutputDir } from 'actions/settings';
import { ipcRenderer } from 'electron';
import 'styles/app';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

ipcRenderer.on('downloads-dir', (event, dir) => {
  // set default output dir to ~/Downloads
  if (!store.getState().settings.output) {
    store.dispatch(setOutputDir(dir));
  }
});

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
}
