import React, { Component } from 'react';
import { SvgIcon } from 'material-ui';
import ControllPanel from '../../containers/ControllPanel';
import Icon from '../../svgicon';

export default class MultiControllPanel extends Component {
  getLongestVideoData() {
    const data = this.players.map(player => player.duration);
    const maxNum = Math.max(...data);
    const index = data.indexOf(maxNum);
    const diameters = data.map(duration => duration / maxNum);

    return {
      index,
      diameters
    };
  }

  play() {
    this.props.video.events.forEach(event => {
      event.play();
    });
  }

  pause() {
    this.props.video.events.forEach(event => {
      event.pause();
    });
  }

  jump(seconds) {
    this.props.video.events.forEach((event, i) => {
      event.seek(seconds * this.getLongestVideoData().diameters[i]);
    });
  }

  changeCurrentTime(seconds) {
    this.props.video.events.forEach((event, i) => {
      const { player } = event.getState();
      event.seek(player.currentTime + seconds * this.getLongestVideoData().diameters[i]);
    });
  }

  render() {
    this.players = this.props.video.singlePlayers;
    if (this.players.length === 0) return null;
    return (
      <ControllPanel
        index={this.getLongestVideoData().index}
        play={this.play.bind(this)}
        pause={this.pause.bind(this)}
        changeCurrentTime={this.changeCurrentTime.bind(this)}
        jump={this.jump.bind(this)}
      />
    );
  }
}
