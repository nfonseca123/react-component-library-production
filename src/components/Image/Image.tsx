import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImage = styled.div<{ bgColor: string; hoverColor: string; disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 20px;
  text-align: center;
  width: 300px;
  
  &:hover {
    background-color: ${(props) => props.disabled ? 'gray' : props.hoverColor};
  }
`;

const Image: React.FC<ImageProps> = ({ src, alt, bgColor='blue', hoverColor='darkblue', disabled=false}) => {

  return (
    <StyledImage
      bgColor={bgColor || 'blue'}
      hoverColor={hoverColor || 'darkblue'}
      disabled={disabled}
      data-testid="image"
    >
    <img src={src} alt={alt}></img>
    </StyledImage>
  );
};

export default Image;
