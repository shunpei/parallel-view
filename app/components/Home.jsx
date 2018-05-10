import React, { Fragment } from 'react';
import styled from 'styled-components';
import Video from '../containers/Video';
import DropZone from '../containers/DropZone';
import { ControllPanel } from '../containers/Controlls';

export default props => {
  const { CurrentFiles } = props;
  return (
    <Fragment>
      <Container>
        <DropZoneWrapper>
          {CurrentFiles.left ? <Video mode="left" /> : <DropZone mode="left" />}
          {CurrentFiles.right ? <Video mode="right" /> : <DropZone mode="right" />}
        </DropZoneWrapper>
      </Container>
      <MultiControllPanel>
        <ControllPanel />
      </MultiControllPanel>
    </Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DropZoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MultiControllPanel = styled.div`
  width: 100%;
  position: fixed;
  bottom: 20px;
`;
