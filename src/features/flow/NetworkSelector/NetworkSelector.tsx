import { getDefaultNetwork, getSupportedNetworks } from '@findeth/networks';
import { FunctionComponent, useEffect } from 'react';
import Button from '../../../components/Button';
import Card, { CardHeader } from '../../../components/Card';
import { CardContent } from '../../../components/Card/Card.styles';
import Dropdown from '../../../components/Dropdown';
import Field from '../../../components/Field';
import Heading from '../../../components/Heading';
import Typography from '../../../components/Typography';
import { useDispatch, useSelector } from '../../../utils/hooks';
import { setNetwork } from '../../network';
import NetworkError from '../../network/NetworkError';
import { FlowComponentProps } from '../Flow';

type Props = FlowComponentProps;

const NetworkSelector: FunctionComponent<Props> = ({ onNext }) => {
  const network = useSelector((state) => state.network.network);
  const isConnecting = useSelector((state) => state.network.isConnecting);
  const isConnected = useSelector((state) => state.network.isConnected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNetwork(getDefaultNetwork()));
  }, []);

  const handleChange = (networkName: string) => {
    const nextNetwork = getSupportedNetworks().find((item) => item.name === networkName);
    if (nextNetwork) {
      dispatch(setNetwork(nextNetwork));
    }
  };

  const handleNext = () => {
    if (network) {
      onNext();
    }
  };

  return (
    <>
      <NetworkError />

      <Card>
        <CardHeader>
          <Heading as="h3">Select a network</Heading>
          <Typography>FindETH supports Ethereum, as well as other EVM-compatible networks.</Typography>
        </CardHeader>
        <CardContent>
          <Field label="Network">
            <Dropdown
              items={getSupportedNetworks().map((network) => network.name)}
              value={network.name}
              onChange={handleChange}
            />
          </Field>

          <Button onClick={handleNext} disabled={!isConnected} loading={isConnecting}>
            Next
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default NetworkSelector;
