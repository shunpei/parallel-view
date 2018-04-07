import React, { Component } from 'react';
import ControllPanel from '../../containers/ControllPanel';

export default class MultiControllPanel extends Component {
  constructor(props) {
    super(props);
    this.players = this.props.video.events;
    this.datas = this.props.video.singlePlayers;
  }

  componentDidUpdate() {
    this.fixedIndex = this.props.index
      ? this.props.index
      : this.players.map(a => !!a).indexOf(true);
    if (this.props.single) {
      this.players = [this.props.video.events[this.fixedIndex]];
      this.singlePlayers = [this.props.video.singlePlayers[this.fixedIndex]];
    }
  }

  render() {
    if (this.players.length === 0) return null;
    return (
      <ControllPanel
        index={this.fixedIndex}
        single={!!this.props.single}
        play={this.props.play.bind(this)}
        pause={this.props.pause.bind(this)}
        changeCurrentTime={this.props.changeCurrentTime.bind(this)}
        jump={this.props.jump.bind(this)}
      />
    );
  }
}
