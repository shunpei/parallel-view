import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlayedList from '../components/PlayedList';
import * as CurrentFilesActions from '../modules/CurrentFiles';
import * as HistoryFilesActions from '../modules/HistoryFiles';

function mapStateToProps(state) {
  return {
    CurrentFiles: state.CurrentFiles,
    HistoryFiles: state.HistoryFiles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...CurrentFilesActions, ...HistoryFilesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayedList);
