import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.div<{ bgColor: string; hoverColor: string; disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }
  
  input[type="radio"]:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    color: ${(props) => (props.disabled ? 'gray' : 'white')};
  }
  
  label {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ radioButtonName, firstQuestion, secondQuestion, bgColor='blue', hoverColor='darkblue', disabled=false }) => {

  return (
    <StyledRadioButton bgColor={bgColor || 'blue'} hoverColor={hoverColor || 'darkblue'} disabled={disabled}  data-testid="radio-button">
        <p>{radioButtonName}</p>
        <input type="radio" name={firstQuestion}></input>
        <label htmlFor={firstQuestion}>{firstQuestion}</label>
        <input type="radio" name={secondQuestion}></input>
        <label htmlFor={secondQuestion}>{secondQuestion}</label>
    </StyledRadioButton>
  );
};

export default RadioButton;
