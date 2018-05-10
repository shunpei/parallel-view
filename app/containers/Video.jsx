import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Video from '../components/Video';
import * as VideosStateActions from '../modules/VideosState';
import * as PlayersStateActions from '../modules/Players';

function mapStateToProps(state) {
  return {
    VideosState: state.VideosState,
    CurrentFiles: state.CurrentFiles,
    HistoryFiles: state.HistoryFiles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...VideosStateActions, ...PlayersStateActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
