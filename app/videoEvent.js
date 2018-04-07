export default {
  getMagnifications(players) {
    const data = players.map(player => player.duration);
    const diameters = data.map(duration => duration / data[0]);
    return diameters;
  },

  play(players) {
    console.log(players);
    players.forEach(event => {
      event.play();
    });
  },

  pause(players) {
    players.forEach(event => {
      event.pause();
    });
  },

  jump(players, seconds) {
    players.forEach(event => {
      event.seek(seconds * this.getMagnifications(players));
    });
  },

  changeCurrentTime(players, seconds) {
    players.forEach(event => {
      const { player } = event.getState();
      const changeTime = seconds * this.getMagnifications(players);
      event.seek(player.currentTime + changeTime);
    });
  }
};
