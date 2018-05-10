import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import MultiControllPanel from '../components/MultiControllPanel/';
import videoEventControler from '../hoc/videoEventControler';
import * as VideoActions from '../actions/video';

function mapStateToProps(state) {
  return {
    file: state.file,
    video: state.video
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(VideoActions, dispatch);
}

export default compose(connect(mapStateToProps, mapDispatchToProps), videoEventControler)(MultiControllPanel);
