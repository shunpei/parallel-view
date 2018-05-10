// @flow
import React, { PureComponent } from 'react';
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

export default class DropZone extends PureComponent<Props, State> {
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
    this.props.accepted(files, this.props.index);
  }

  render() {
    const actions = [<FlatButton primary label="OK" onClick={this.handleClose} />];
    return (
      <div onClick={this.props.wrapOnClick} className={`${styles.wrapper} ${this.props.wrapClass}`}>
        <Dropzone
          onDropAccepted={this.handleOnVideoDrop.bind(this)}
          onDropRejected={this.handleOpen.bind(this)}
          accept="video/mp4"
          className={styles.dropzone}
          {...this.props.dropZone}
        >
          {this.props.children}
        </Dropzone>
        <Dialog
          actions={actions}
          title="動画形式のファイルをアップしてください"
          modal={false}
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}
