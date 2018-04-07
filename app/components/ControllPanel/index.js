import React, { PureComponent } from 'react';
import { SvgIcon } from 'material-ui';
import { lightBlue200 } from 'material-ui/styles/colors';
import Slider from '../../containers/Slider';
import styles from './style.css';
import Icon from '../../svgicon';

const style = {
  wrapper: {
    width: '80%',
    marginLeft: '3%'
  },
  slider: {
    margin: 0
  }
};

export default class Viewer extends PureComponent {
  playIcon() {
    if (this.player.paused) {
      return (
        <SvgIcon hoverColor={lightBlue200} onClick={this.props.play}>
          <path d={Icon.play} />
        </SvgIcon>
      );
    }
    return (
      <SvgIcon hoverColor={lightBlue200} onClick={this.props.pause}>
        <path d={Icon.pause} />
      </SvgIcon>
    );
  }

  changeCurrentTime(seconds) {
    this.props.changeCurrentTime(seconds);
  }

  render() {
    this.player = this.props.video.singlePlayers[this.props.index];
    if (this.player === undefined) return null;
    return (
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <SvgIcon hoverColor={lightBlue200} onClick={this.changeCurrentTime.bind(this, -10)}>
            <path d={Icon.replay10} />
          </SvgIcon>
          {this.playIcon()}
          <SvgIcon hoverColor={lightBlue200} onClick={this.changeCurrentTime.bind(this, 10)}>
            <path d={Icon.forward10} />
          </SvgIcon>
        </div>
        <Slider
          style={style.wrapper}
          sliderStyle={style.slider}
          index={this.props.index}
          jump={this.props.jump}
        />
      </div>
    );
  }
}
