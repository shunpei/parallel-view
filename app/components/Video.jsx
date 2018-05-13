import React, { Component } from 'react';
import styled from 'styled-components';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import { ControllPanel } from '../containers/Controlls';
import DropZone from '../containers/DropZone';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }
  componentDidMount() {
    const { setPlayer, mode } = this.props;
    this.player.current.subscribeToStateChange(this.handleStateChange.bind(this));
    setPlayer(this.player.current, mode);
  }

  shouldComponentUpdate(nextProps) {
    const { CurrentFiles, mode } = this.props;
    if (CurrentFiles[mode] === nextProps.CurrentFiles[mode]) return false;
    return true;
  }

  handleStateChange(state) {
    const { mode, setVideoState, setPlayer } = this.props;
    setVideoState(state, mode);
  }

  playToggle() {
    const { player } = this.player.current.getState();
    if (player.paused) {
      this.player.current.play();
    } else {
      this.player.current.pause();
    }
  }

  render() {
    const { CurrentFiles, mode } = this.props;
    const src = CurrentFiles[mode];

    if (this.player.current) this.player.current.load();

    return (
      <Container>
        <DropZone
          onlyFrame
          onClick={this.playToggle.bind(this)}
          mode={mode}
          dropzone={{
            disableClick: true,
            style: dropZoneStyle
          }}
        />
        <Player ref={this.player}>
          <source src={src} />
          <BigPlayButton position="center" />
          <ControlBar disabled />
        </Player>
        <ControllPanel mode={mode} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const dropZoneStyle = {
  position: 'absolute',
  width: '100%',
  height: 'calc(56.25vw / 2)',
  top: 0,
  zIndex: 2
};
