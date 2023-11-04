import {
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  TableThead,
} from './Transaction.styled';

export const Transaction = ({ items }) => {
  return (
    <Table>
      <TableThead>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableThead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
