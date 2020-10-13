import { getSupportedNetworks } from '@findeth/networks';
import React, { FunctionComponent } from 'react';
import Network from '../../../components/Network';
import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';
import Dropdown from '../../../components/ui/Dropdown';
import { useDispatch, useSelector } from '../../../hooks';
import { setNetwork } from '../../../store/network';
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
    <Container>
      <Dropdown
        items={getSupportedNetworks().map(network => network.name)}
        value={network.name}
        onChange={handleChange}
      />

      <Network />

      <Button onClick={handleNext}>Next</Button>
    </Container>
  );
};

export default NetworkSelector;
