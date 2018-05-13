import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';

import ControllPanelComponent from '../components/ControllPanel';
import ControllsComponent from '../components/Controlls';
import SoundControllComponent from '../components/SoundControll';
import * as PlayersActions from '../modules/Players';

function mapStateToProps(state) {
  return {
    VideosState: state.VideosState,
    Players: state.Players
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayersActions, dispatch);
}

const withPlayerChack = branch(
  props => {
    if (props.mode) {
      return props.VideosState[props.mode];
    }
    return props.VideosState.left && props.VideosState.right;
  },
  component => component,
  renderComponent(() => null)
);

const HocControllPanel = WrapperdComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.playersArray = Object.values(props.Players);
    }

    getMagnifications() {
      const { VideosState, mode } = this.props;
      const data = Object.values(VideosState).map(state => state.duration);
      return data[0] ? data.map(duration => duration / data[0]) : [1, 1];
    }

    getVideoData(key) {
      const { VideosState, mode } = this.props;
      if (mode) {
        return VideosState[mode][key];
      }
      return VideosState.left[key];
    }

    play() {
      const { Players, mode } = this.props;
      if (mode) {
        Players[mode].play();
      } else {
        Object.values(Players).forEach(event => {
          event.play();
        });
      }
    }

    pause() {
      const { Players, mode } = this.props;
      if (mode) {
        Players[mode].pause();
      } else {
        Object.values(Players).forEach(event => {
          event.pause();
        });
      }
    }

    jump(e, seconds) {
      const { Players, mode } = this.props;
      if (mode) {
        Players[mode].seek(seconds);
      } else {
        Object.values(Players).forEach((event, i) => {
          event.seek(seconds * this.getMagnifications(this.datas)[i]);
        });
      }
    }

    volumeJump(e, volume) {
      const { Players, mode } = this.props;
      if (mode) {
        Players[mode].volume = volume;
      } else {
        Object.values(Players).forEach((event, i) => {
          this.playersArray[i].volume = volume;
        });
      }
    }

    setMuted(muted) {
      const { Players, mode } = this.props;
      if (mode) {
        Players[mode].muted = muted;
      } else {
        Object.values(Players).forEach((event, i) => {
          this.playersArray[i].muted = muted;
        });
      }
    }

    changeCurrentTime(seconds) {
      const { Players, mode } = this.props;
      if (mode) {
        const { player } = Players[mode].getState();
        Players[mode].seek(player.currentTime + seconds);
      } else {
        Object.values(Players).forEach((event, i) => {
          const { player } = event.getState();
          const changeTime = seconds * this.getMagnifications(this.datas)[i];
          event.seek(player.currentTime + changeTime);
        });
      }
    }

    render() {
      return (
        <WrapperdComponent
          {...this.props}
          duration={this.getVideoData('duration')}
          currentTime={this.getVideoData('currentTime')}
          volume={this.getVideoData('volume')}
          muted={this.getVideoData('muted')}
          paused={this.getVideoData('paused')}
          pause={this.pause.bind(this)}
          play={this.play.bind(this)}
          jump={this.jump.bind(this)}
          setMuted={this.setMuted.bind(this)}
          volumeJump={this.volumeJump.bind(this)}
          changeCurrentTime={this.changeCurrentTime.bind(this)}
        />
      );
    }
  };

export const Controlls = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPlayerChack,
  HocControllPanel
)(ControllsComponent);

export const ControllPanel = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPlayerChack,
  HocControllPanel
)(ControllPanelComponent);

export const SoundControll = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPlayerChack,
  HocControllPanel
)(SoundControllComponent);

export default {
  Controlls,
  ControllPanel,
  SoundControll
};
