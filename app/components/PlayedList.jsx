import React from 'react';
import styled from 'styled-components';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/svg-icons/av/playlist-play';
import { lightBlue200 } from 'material-ui/styles/colors';
import PlayedItem from './PlaydItem';

export default class PlayedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      path: {
        left: this.props.CurrentFiles.left,
        right: this.props.CurrentFiles.right
      }
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  handleChange = () => {
    const { setCurrentFile } = this.props;
    const { path } = this.state;
    console.log(path);
    Object.keys(path).forEach(mode => {
      setCurrentFile(path[mode], mode);
    });
    this.setState({ open: false });
  };

  onChange = (path, mode) => {
    this.setState({
      path: {
        ...this.state.path,
        [mode]: path
      }
    });
  };

  createPlayedItem = () => {
    const { HistoryFiles, CurrentFiles, mode } = this.props;
    if (mode) {
      return (
        <PlayedItem
          name={`${mode}Files`}
          options={HistoryFiles[mode]}
          defaultSelected={CurrentFiles[mode]}
          onChange={this.onChange}
          mode={mode}
          title={mode}
        />
      );
    }

    return Object.keys(HistoryFiles).map((key, i) => (
      <PlayedItem
        key={`${key}Map`}
        name={`${key}Files`}
        title={key}
        mode={key}
        onChange={this.onChange}
        options={HistoryFiles[key]}
        defaultSelected={CurrentFiles[key]}
      />
    ));
  };

  render() {
    const { HistoryFiles, CurrentFiles, mode } = this.props;

    const actions = [
      <FlatButton label="Cancel" onClick={this.handleCancel} />,
      <FlatButton label="Change" primary onClick={this.handleChange} />
    ];

    return (
      <Container>
        <StyledList hoverColor={lightBlue200} onClick={this.handleOpen} />
        <Dialog
          title="History"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <PlayedItemWrapper>{this.createPlayedItem()}</PlayedItemWrapper>
        </Dialog>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledList = styled(List)`
  width: 30px !important;
  height: 30px !important;
`;

const PlayedItemWrapper = styled.div`
  display: flex;
  width: 100%;
`;
