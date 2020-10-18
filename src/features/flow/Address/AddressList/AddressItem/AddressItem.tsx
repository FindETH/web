import { FunctionComponent } from 'react';
import { TableCell } from '../../../../../components/Table';
import { useDispatch } from '../../../../../hooks';
import { removeAddress } from '../../../../search';
import { RemoveIcon } from './AddressItem.styles';

interface Props {
  address: string;
}

const AddressItem: FunctionComponent<Props> = ({ address }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeAddress(address));
  };

  return (
    <tr>
      <TableCell>{address}</TableCell>
      <TableCell center={true}>
        <RemoveIcon icon="cross" title="Remove" onClick={handleRemove} />
      </TableCell>
    </tr>
  );
};

export default AddressItem;
