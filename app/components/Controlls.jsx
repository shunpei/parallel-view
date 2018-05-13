import React from 'react';
import styled, { css } from 'styled-components';

import Play from 'material-ui/svg-icons/av/play-circle-outline';
import Pause from 'material-ui/svg-icons/av/pause-circle-outline';
import Forward from 'material-ui/svg-icons/av/fast-forward';
import Rewind from 'material-ui/svg-icons/av/fast-rewind';
import Replay from 'material-ui/svg-icons/av/replay';

import { lightBlue200 } from 'material-ui/styles/colors';

import { SoundControll } from '../containers/Controlls';
import PlayedList from '../containers/PlayedList';

export default props => {
  const {
    paused, mode, play, pause, changeCurrentTime, volumeJump, setMuted, jump
  } = props;

  const isPlay = () => <StyledPlay hoverColor={lightBlue200} onClick={play} />;
  const isPaused = () => <StyledPause hoverColor={lightBlue200} onClick={pause} />;

  return (
    <Container>
      <LeftPostion>{!!mode || <SoundControll mode={mode} />}</LeftPostion>
      <Controlls>
        <StyledReplay hoverColor={lightBlue200} onClick={() => jump(null, 0)} />
        <StyledRewind hoverColor={lightBlue200} onClick={() => changeCurrentTime(-0.1)} />
        {paused ? isPlay() : isPaused()}
        <StyledForward hoverColor={lightBlue200} onClick={() => changeCurrentTime(0.1)} />
      </Controlls>
      <RightPostion>
        <PlayedList mode={mode} />
      </RightPostion>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Controlls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const playPauseSize = css`
  width: 50px !important;
  height: 50px !important;
`;

const StyledPlay = styled(Play)`
  ${playPauseSize};
`;

const StyledPause = styled(Pause)`
  ${playPauseSize};
`;

const StyledRewind = styled(Rewind)`
  margin-right: 10px;
`;

const StyledForward = styled(Forward)`
  margin-left: 10px;
`;

const StyledReplay = styled(Replay)`
  margin-right: 20px;
`;

const RightPostion = styled.div`
  position: absolute;
  right: 0;
`;

const LeftPostion = styled.div`
  position: absolute;
  left: 0;
`;
