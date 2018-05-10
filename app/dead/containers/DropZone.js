import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DropZone from '../components/DropZone';
import * as FileActions from '../actions/file';
import * as VideoActions from '../actions/video';

function mapStateToProps(state) {
  return {
    file: state.file,
    video: state.video
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { ...FileActions, ...VideoActions };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
