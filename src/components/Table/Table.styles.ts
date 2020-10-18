import styled from 'styled-components';
import Typography from '../Typography';

export const TableContainer = styled.table`
  width: 100%;
  margin: 1.5rem 0;
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  border-spacing: 0;
  box-shadow: ${({ theme }) => theme.smallShadow};
  background: ${({ theme }) => theme.table.background};

  thead {
    width: 100%;
  }
`;

interface TableCellProps {
  center?: boolean;
}

export const TableCell = styled(Typography).attrs({ as: 'td' })<TableCellProps>`
  width: 100%;
  margin: 0;
  padding: 0.75rem 1.5rem;
  display: table-cell;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const TableHeading = styled(TableCell).attrs({ as: 'th' })`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${({ theme }) => theme.table.headerBackground};
  box-sizing: border-box;
  text-align: left;
  border-bottom: ${({ theme }) => theme.border};
`;
