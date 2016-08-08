import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';
import rootReducer from 'reducers';

const middleware = [thunk, createDebounce()];

const enhancer = applyMiddleware(...middleware);

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
}
