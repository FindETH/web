import { FunctionComponent } from 'react';
import { getBlockie } from '../../utils/blockies';
import { BlockieImage } from './Blockie.styles';

interface Props {
  address: string;
}

const Blockie: FunctionComponent<Props> = ({ address }) => <BlockieImage src={getBlockie(address)} alt={address} />;

export default Blockie;
