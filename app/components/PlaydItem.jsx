import React from 'react';
import styled from 'styled-components';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default props => {
  const {
    options, title, defaultSelected, mode, onChange, name
  } = props;
  const radios = options.map((file, i) => (
    <RadioButton style={{ paddingTop: 10 }} key={i} value={file.path} label={file.name} />
  ));

  return (
    <Container>
      <Title>{mode}</Title>
      <RadioButtonGroup
        name={name}
        defaultSelected={defaultSelected}
        onChange={(e, val) => onChange(val, mode)}
      >
        {radios}
      </RadioButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  text-transform: capitalize;
`;
