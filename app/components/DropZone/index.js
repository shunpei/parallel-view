import React, { Component } from 'react';
import { Dialog, FlatButton } from 'material-ui';
import Dropzone from 'react-dropzone';
import styles from './style.css';

export default class DropZone extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOnVideoDrop(files) {
    this.props.accepted(files);
    // files.forEach((file) => {
    //   this.props.addVideo(file);
    // });
  }

  render() {
    const actions = [<FlatButton primary label="OK" onClick={this.handleClose} />];

    return (
      <div>
        <Dropzone
          onDropAccepted={this.handleOnVideoDrop.bind(this)}
          onDropRejected={this.handleOpen.bind(this)}
          accept="video/mp4"
        >
          <div>
            ファイルを指定またはドラッグ&ドロップ
            <p>形式: gif/png/jpeg/jpg</p>
          </div>
        </Dropzone>
        <Dialog
          actions={actions}
          title="動画形式のファイルをアップしてください"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}
