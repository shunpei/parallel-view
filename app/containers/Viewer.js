import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Viewer from '../components/Viewer';
import * as VideoActions from '../actions/video';

function mapStateToProps(state) {
  console.log(state);
  return {
    file: state.file,
    video: state.video
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(VideoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
