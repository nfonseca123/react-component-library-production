import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable= styled.table<{ bgColor: string; hoverColor: string; disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }
`;

const Table: React.FC<TableProps> = ({ headerName, tableData, footerName, bgColor='blue', hoverColor='darkblue', disabled=false }) => {

  return (
    <StyledTable
      bgColor={bgColor || 'blue'}
      hoverColor={hoverColor || 'darkblue'}
      disabled={disabled}
    >
        <thead>
            <tr>
            <th>{headerName}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{tableData}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <td>{footerName}</td>
            </tr>
        </tfoot>
    </StyledTable>
  );
};

export default Table;
