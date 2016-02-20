import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import debounce from 'redux-debounced';
import rootReducer from 'reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk, debounce)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
