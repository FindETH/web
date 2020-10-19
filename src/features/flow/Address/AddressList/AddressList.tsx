import { FunctionComponent } from 'react';
import Table, { TableCell } from '../../../../components/Table';
import { useSelector } from '../../../../utils/hooks';
import AddressItem from './AddressItem';

const AddressList: FunctionComponent = () => {
  const addresses = useSelector((state) => state.search.addresses);

  return (
    <Table columns={['Address', 'Remove']}>
      {addresses.length === 0 && (
        <tr>
          <TableCell as="td" colSpan={2} muted={true}>
            Enter an address above...
          </TableCell>
        </tr>
      )}

      {addresses.map((address) => (
        <AddressItem key={address} address={address} />
      ))}
    </Table>
  );
};

export default AddressList;
