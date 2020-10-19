import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import { FunctionComponent, useEffect } from 'react';
import Page from '../../../components/Page';
import { SearchType } from '../../../types/search';
import { useDispatch } from '../../../utils/hooks';
import { setType } from '../../search';
import Address from '../Address';
import ConnectWallet from '../ConnectWallet';
import Flow from '../Flow';
import Wallet from '../Wallet';

type Props = RouteComponentProps;

const AddressFlow: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(SearchType.ADDRESS));
  }, []);

  const handleDone = () => {
    navigate('/search');
  };

  return (
    <Page title="Search for Address">
      <Flow components={[Address, Wallet, ConnectWallet]} onDone={handleDone} />
    </Page>
  );
};

export default AddressFlow;
