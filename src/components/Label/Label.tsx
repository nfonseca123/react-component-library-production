import React, { useState } from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ bgColor: string; hoverColor: string; disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }
`;

const Label: React.FC<LabelProps> = ({ label, bgColor, hoverColor, disabled }) => {

  return (
    <StyledLabel
      bgColor={bgColor || 'blue'}
      hoverColor={hoverColor || 'darkblue'}
      disabled={disabled || false}
    >
      {label}
    </StyledLabel>
  );
};

export default Label;
