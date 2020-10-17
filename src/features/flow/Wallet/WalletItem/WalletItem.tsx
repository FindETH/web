import { WalletType } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import Heading from '../../../../components/ui/Heading';
import Typography from '../../../../components/ui/Typography';
import { WalletContainer } from './WalletItem.styles';

interface Props {
  title: string;
  description: string;
  type: WalletType;
  onSelect(type: WalletType): void;
}

const WalletItem: FunctionComponent<Props> = ({ title, description, type, onSelect }) => {
  const handleSelect = () => onSelect(type);

  return (
    <WalletContainer onClick={handleSelect}>
      <Heading as="h4">{title}</Heading>
      <Typography>{description}</Typography>
    </WalletContainer>
  );
};

export default WalletItem;
