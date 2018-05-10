import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from '../components/Slider';
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
