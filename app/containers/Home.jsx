import { connect } from 'react-redux';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    CurrentFiles: state.CurrentFiles
  };
}

export default connect(mapStateToProps)(Home);
