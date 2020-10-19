import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import { FunctionComponent, useEffect } from 'react';
import Page from '../../../components/Page';
import { SearchType } from '../../../types/search';
import { useDispatch } from '../../../utils/hooks';
import CheckConnection from '../../network/CheckConnection';
import { setType } from '../../search';
import ConnectWallet from '../ConnectWallet';
import Flow from '../Flow';
import NetworkSelector from '../NetworkSelector';
import Wallet from '../Wallet';

type Props = RouteComponentProps;

const AssetFlow: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(SearchType.ASSETS));
  }, []);

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

export default AssetFlow;
