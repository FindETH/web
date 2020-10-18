import { FunctionComponent } from 'react';
import { TableContainer, TableHeading } from './Table.styles';

interface Props {
  columns: string[];
}

const Table: FunctionComponent<Props> = ({ columns, children }) => (
  <TableContainer>
    <thead>
      <tr>
        {columns.map((column, index) => (
          <TableHeading key={index}>{column}</TableHeading>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </TableContainer>
);

export default Table;
