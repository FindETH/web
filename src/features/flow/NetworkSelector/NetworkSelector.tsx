import { getSupportedNetworks } from '@findeth/networks';
import { FunctionComponent } from 'react';
import Button from '../../../components/Button';
import Card, { CardHeader } from '../../../components/Card';
import Dropdown from '../../../components/Dropdown';
import Heading from '../../../components/Heading';
import Network from '../../../components/Network';
import Typography from '../../../components/Typography';
import { useDispatch, useSelector } from '../../../utils/hooks';
import { setNetwork } from '../../network';
import { FlowComponentProps } from '../Flow';

type Props = FlowComponentProps;

const NetworkSelector: FunctionComponent<Props> = ({ onNext }) => {
  const network = useSelector(state => state.network.network);
  const dispatch = useDispatch();

  const handleChange = (networkName: string) => {
    const nextNetwork = getSupportedNetworks().find(item => item.name === networkName);
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
    <Card>
      <CardHeader>
        <Heading as="h3">Select a network</Heading>
        <Typography>FindETH supports Ethereum, as well as other EVM-compatible networks.</Typography>
      </CardHeader>
      <Dropdown
        items={getSupportedNetworks().map(network => network.name)}
        value={network.name}
        onChange={handleChange}
      />

      <Network />

      <Button onClick={handleNext}>Next</Button>
    </Card>
  );
};

export default NetworkSelector;
