import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';
import rootReducer from 'reducers';
import * as settingsActions from '../actions/settings';
import * as downloadActions from '../actions/download';

const actionCreators = {
  ...settingsActions,
  ...downloadActions,
};

const middleware = [thunk, createDebounce()];

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ?
    window.devToolsExtension({ actionCreators }) :
    noop => noop
);

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store);
  }

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
}
