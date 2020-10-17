import { getSupportedNetworks } from '@findeth/networks';
import { FunctionComponent } from 'react';
import Card, { CardHeader } from '../../../components/Card';
import Network from '../../../components/Network';
import Button from '../../../components/ui/Button';
import Dropdown from '../../../components/ui/Dropdown';
import Heading from '../../../components/ui/Heading';
import Typography from '../../../components/ui/Typography';
import { useDispatch, useSelector } from '../../../hooks';
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
