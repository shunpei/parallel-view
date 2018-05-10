// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import file from './file';
import video from './video';

const rootReducer = combineReducers({
  counter,
  file,
  video,
  router
});

export default rootReducer;
