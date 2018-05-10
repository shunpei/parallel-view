import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import DropZone from '../../containers/DropZone';
import ControllPanel from '../../containers/MultiControllPanel';
import styles from './style.css';

export default class Viewer extends Component {
  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    this.props.addVideoEvents(this.props.index, this.player);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.data.path === nextProps.data.path) return false;
    return true;
  }

  handleStateChange(state) {
    this.props.updateVideo(this.props.index, state);
  }

  playToggle() {
    const { player } = this.player.getState();
    if (player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  render() {
    if (this.player) this.player.load();
    return (
      <div className={styles.viewer}>
        <DropZone
          wrapOnClick={this.playToggle.bind(this)}
          wrapClass={styles.wrapper}
          index={this.props.index}
          dropZone={{
            disableClick: true,
            className: styles.dropzone
          }}
        />
        <Player
          ref={c => {
            this.player = c;
          }}
        >
          <source src={this.props.data.path} />
          <BigPlayButton position="center" />
          <ControlBar disabled />
        </Player>
        <ControllPanel single index={this.props.index} />
      </div>
    );
  }
}
