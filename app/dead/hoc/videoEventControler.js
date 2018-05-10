import React, { Component } from 'react';

const getMagnifications = players => {
  const data = players.map(player => player.duration);
  return data[0] ? data.map(duration => duration / data[0]) : [1, 1];
};

export default WrappedComponent =>
  class extends Component {
    play() {
      this.players.forEach(event => {
        event.play();
      });
    }

    pause() {
      this.players.forEach(event => {
        event.pause();
      });
    }

    jump(seconds) {
      this.players.forEach((event, i) => {
        event.seek(seconds * getMagnifications(this.datas)[i]);
      });
    }

    changeCurrentTime(seconds) {
      this.players.forEach((event, i) => {
        const { player } = event.getState();
        const changeTime = seconds * getMagnifications(this.datas)[i];
        event.seek(player.currentTime + changeTime);
      });
    }

    render() {
      const newProps = {
        play: this.play,
        pause: this.pause,
        jump: this.jump,
        changeCurrentTime: this.changeCurrentTime
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
