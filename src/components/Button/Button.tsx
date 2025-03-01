import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ bgColor: string; hoverColor: string; disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, bgColor, hoverColor, disabled = false }) => {

  return (
    <StyledButton
      bgColor={bgColor || 'blue'}
      hoverColor={hoverColor || 'darkblue'}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
