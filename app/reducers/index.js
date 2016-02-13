import { combineReducers } from 'redux';
import download from './download';
import settings from './settings';

const rootReducer = combineReducers({
  download,
  settings
});

export default rootReducer;
