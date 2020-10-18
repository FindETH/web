import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import { FunctionComponent } from 'react';
import Page from '../../../components/Page';
import CheckConnection from '../../network/CheckConnection';
import ConnectWallet from '../ConnectWallet';
import Flow from '../Flow';
import NetworkSelector from '../NetworkSelector';
import Wallet from '../Wallet';

type Props = RouteComponentProps;

const EtherFlow: FunctionComponent<Props> = () => {
  const handleDone = () => {
    navigate('/search');
  };

  return (
    <Page title="Search for Assets">
      <CheckConnection>
        <Flow components={[NetworkSelector, Wallet, ConnectWallet]} onDone={handleDone} />
      </CheckConnection>
    </Page>
  );
};

export default EtherFlow;
