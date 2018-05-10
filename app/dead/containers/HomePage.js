import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as fileActions from '../actions/file';

function mapStateToProps(state) {
  return {
    file: state.file
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fileActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
