import React, { useState } from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ backgroundImage: string; borderColor: string; bgColor: string; hoverColor: string; disabled: boolean }>`
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-image: ${(props) => props.disabled ? 'none' : `url(${props.backgroundImage})`};
  background-size: cover;
  background-color: ${(props) => props.disabled ? 'gray' : props.bgColor};
  width: 100%;
  min-height: 400px;
  border: 2px solid transparent;
  
  &:hover {
    border: 5px solid ${(props) => props.disabled ? 'none' : props.borderColor};
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }
  
  h1 {
   padding: 50px;
   font-size: 6em;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({ label, backgroundImage, borderColor='red', bgColor='blue', hoverColor='darkblue', disabled=false}) => {

  return (
    <StyledHeroImage
      bgColor={bgColor}
      hoverColor={hoverColor}
      disabled={disabled}
      borderColor={borderColor}
      backgroundImage={backgroundImage}
    >
    <h1>{label}</h1>
    </StyledHeroImage>
  );
};

export default HeroImage;
