import React from 'react';
import styled from 'styled-components';
import Slider from 'material-ui/Slider';
import { Controlls } from '../containers/Controlls';

export default props => {
  const {
    duration, currentTime, mode, jump
  } = props;

  return (
    <Container>
      <StyledSlider max={duration || 1} value={currentTime || 0} onChange={jump} />
      <Controlls mode={mode} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 10px 0;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  margin-bottom: 10px;

  & > div {
    margin: 0 !important;
  }
`;
