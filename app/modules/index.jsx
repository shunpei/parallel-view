import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import CurrentFiles from './CurrentFiles';
import HistoryFiles from './HistoryFiles';
import VideosState from './VideosState';
import Players from './Players';

const rootReducer = combineReducers({
  CurrentFiles,
  HistoryFiles,
  VideosState,
  Players,
  router
});

export default rootReducer;
