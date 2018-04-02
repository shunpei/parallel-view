// @flow
import React, { Component } from 'react';
import { Dialog, FlatButton } from 'material-ui';
import Dropzone from 'react-dropzone';
import styles from './style.css';

type Props = {
  index: number,
  accepted: (files: Array<File>, index: number) => void
};

type State = {
  modalOpen: boolean
};

export default class DropZone extends Component<Props, State> {
  state = {
    modalOpen: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleOnVideoDrop(files: Array<File>): void {
    console.log(files);
    this.props.accepted(files, this.props.index);
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
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}
