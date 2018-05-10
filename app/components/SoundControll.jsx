import React from 'react';
import styled, { css } from 'styled-components';
import Slider from 'material-ui/Slider';
import VolumeUp from 'material-ui/svg-icons/av/volume-up';
import VolumeDown from 'material-ui/svg-icons/av/volume-down';
import VolumeOff from 'material-ui/svg-icons/av/volume-off';
import VolumeMute from 'material-ui/svg-icons/av/volume-mute';
import { lightBlue200 } from 'material-ui/styles/colors';

export default props => {
  const {
    volume, mode, volumeJump, setMuted, muted
  } = props;

  const renderVolumeIcon = () => {
    if (muted) {
      return <StyledVolumeOff hoverColor={lightBlue200} onClick={() => setMuted(false)} />;
    } else if (volume === 0) {
      return <StyledVolumeMute hoverColor={lightBlue200} onClick={() => setMuted(true)} />;
    } else if (volume < 0.5) {
      return <StyledVolumeDown hoverColor={lightBlue200} onClick={() => setMuted(true)} />;
    }
    return <StyledVolumeUp hoverColor={lightBlue200} onClick={() => setMuted(true)} />;
  };

  return (
    <Container>
      {renderVolumeIcon()}
      <StyledSlider disabled={muted} max={1} min={0} value={volume} onChange={volumeJump} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

const Icon = css`
  width: 30px !important;
  height: 30px !important;
  margin-right 10px;
`;

const StyledVolumeUp = styled(VolumeUp)`
  ${Icon};
`;

const StyledVolumeDown = styled(VolumeDown)`
  ${Icon};
`;

const StyledVolumeMute = styled(VolumeMute)`
  ${Icon};
`;

const StyledVolumeOff = styled(VolumeOff)`
  ${Icon};
`;

const StyledSlider = styled(Slider)`
  width: 100%;

  & > div {
    margin: 0 !important;
  }
`;
