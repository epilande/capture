import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import debounce from 'redux-debounced';
import rootReducer from 'reducers';

const middleware = [thunk, debounce];

const enhancer = applyMiddleware(...middleware);

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
}
