import React, { Component } from 'react';
import { Slider } from 'material-ui';

const padZero = v => {
  if (v < 10) {
    return `0${v}`;
  }
  return v;
};

export default class SliderUi extends Component {
  getCurrentMinTime() {
    return `${Math.floor(this.props.player.currentTime / 60)}:${padZero(Math.floor(this.props.player.currentTime % 60))}`;
  }

  onChange(e, value) {
    this.props.jump(Math.floor(value));
  }

  render() {
    const player = this.props.video.singlePlayers[this.props.index];
    if (player === undefined) return null;
    return (
      <Slider
        style={this.props.style}
        sliderStyle={this.props.sliderStyle}
        max={player.duration ? player.duration : 1}
        value={player.currentTime ? player.currentTime : 0}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}
