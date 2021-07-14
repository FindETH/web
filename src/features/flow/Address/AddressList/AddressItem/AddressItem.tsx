import { FunctionComponent } from 'react';
import Spinner from '../../../../../components/Spinner';
import { TableCell } from '../../../../../components/Table';
import { useDispatch } from '../../../../../utils/hooks';
import { Address, removeAddress } from '../../../../search';
import { RemoveIcon, AddressWrapper } from './AddressItem.styles';

interface Props {
  address: Address;
}

const AddressItem: FunctionComponent<Props> = ({ address: { address, isResolving, isInvalid } }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeAddress(address));
  };

  return (
    <tr data-testid="address-table-row">
      <TableCell>
        <AddressWrapper isInvalid={isInvalid ?? false}>
          {isResolving && <Spinner />} {address}
        </AddressWrapper>
      </TableCell>
      <TableCell center={true}>
        <RemoveIcon icon="cross" title="Remove" onClick={handleRemove} />
      </TableCell>
    </tr>
  );
};

export default AddressItem;
