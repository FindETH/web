import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import { FunctionComponent } from 'react';
import Page from '../../../components/Page';
import Address from '../Address';
import ConnectWallet from '../ConnectWallet';
import Flow from '../Flow';
import Wallet from '../Wallet';

type Props = RouteComponentProps;

const AddressFlow: FunctionComponent<Props> = () => {
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
