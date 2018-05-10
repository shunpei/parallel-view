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
      <ControllPanel />
    </Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DropZoneWrapper = styled.div`
  width: 100%;
  padding-top: 108px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
