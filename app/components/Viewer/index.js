import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import DropZone from '../../containers/DropZone';
import ControllPanel from '../../containers/ControllPanel';
import styles from './style.css';

export default class Viewer extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    this.props.addVideoEvents(this.props.index, this.player);
  }

  handleStateChange(state) {
    this.props.updateVideo(this.props.index, state);
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  jump(seconds) {
    this.player.seek(seconds);
  }

  changeCurrentTime(seconds) {
    const { player } = this.player.getState();
    this.player.seek(player.currentTime + seconds);
  }

  render() {
    return (
      <div>
        <DropZone index={this.props.index} />
        <Player
          ref={c => {
            this.player = c;
          }}
        >
          <source src={this.props.data.path} />
          <BigPlayButton position="center" />
          <ControlBar disabled />
        </Player>
      </div>
    );
  }
}
