import React, { useState } from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{bgColor: string; hoverColor: string; disabled: boolean }>`
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => props.disabled ? 'gray' : props.bgColor};
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
  padding: 10px;
  
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }
  .card-body {
    padding: 16px;
  }
  .card-title {
    font-size: 1.5em;
    margin-bottom: 8px;
    color: white;
  }
  .card-text {
    font-size: 1em;
    color: #555;
    margin-bottom: 16px;
    color: white
  }
  .card-footer {
    text-align: right;
    font-size: 0.9em;
    color: white;
  }
`;

const Card: React.FC<CardProps> = ({ cardTitle, cardText, cardFooter, bgColor="blue", hoverColor="darkblue", disabled=false }) => {

  return (
    <StyledCard
      bgColor={bgColor}
      hoverColor={hoverColor}
      disabled={disabled}
    >
        <div className="card-body">
            <div className="card-title">{cardTitle}</div>
            <div className="card-text">{cardText}</div>
        </div>
        <div className="card-footer">{cardFooter}</div>
    </StyledCard>
  );
};

export default Card;
 