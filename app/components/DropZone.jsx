import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import DropZone from 'react-dropzone';
import { Dialog, FlatButton, SvgIcon } from 'material-ui';
import { blueA400 } from 'material-ui/styles/colors';
import Icon from '../svgicon';

export default class Drop extends PureComponent {
  state = {
    modalOpen: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleOnVideoDrop(files) {
    const {
      mode, addVideo, setCurrentFile, HistoryFiles
    } = this.props;

    if (HistoryFiles[mode].length === 0) {
      addVideo(files, mode);
      setCurrentFile(files[0].path, mode);
      return true;
    }

    const hasHistoryFile = HistoryFiles[mode].some(file => {
      if (files[0].path === file.path) {
        return true;
      }
      return false;
    });

    if (hasHistoryFile) {
      setCurrentFile(files[0].path, mode);
    } else {
      addVideo(files, mode);
      setCurrentFile(files[0].path, mode);
    }
  }

  render() {
    const {
      quantity, dropzone, onlyFrame, onClick
    } = this.props;
    const actions = [<FlatButton primary label="OK" onClick={this.handleClose} />];
    return (
      <Container onClick={onClick || null}>
        <DropZone
          onDropAccepted={this.handleOnVideoDrop.bind(this)}
          onDropRejected={this.handleOpen.bind(this)}
          style={onlyFrame ? null : DropzoneStyle(quantity || 2)}
          multiple={false}
          accept="video/mp4"
          {...dropzone}
        >
          {onlyFrame ? null : (
            <Fragment>
              <Wrapper>
                <SvgIcon style={Upload}>
                  <path d={Icon.upload} />
                </SvgIcon>
                <Title>DRAG & DROP</Title>
                <SubTitle>or select files your system</SubTitle>
              </Wrapper>
              <Description>( you can only upload MP4 )</Description>
            </Fragment>
          )}
        </DropZone>
        <Dialog
          actions={actions}
          title="動画形式のファイルをアップ、もしくは2つ以上のファイルはアップできません。"
          modal={false}
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${blueA400};
  font-family: 'Roboto';
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: #8792a4;
  font-family: 'Roboto';
`;

const Description = styled.div`
  color: #cbcfd4;
  padding-bottom: 20px;
  font-family: 'Roboto';
`;

const DropzoneStyle = quantity => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: `calc(56.25vw / ${quantity})`,
  borderWidth: '2px',
  borderColor: '#d6d6d6',
  borderStyle: 'dashed',
  borderRadius: '5px',
  backgroundColor: '#fafafa',
  position: 'relative'
});

const Upload = {
  color: blueA400,
  width: '100px',
  height: '100px'
};
