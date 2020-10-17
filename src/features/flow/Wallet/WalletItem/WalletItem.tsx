import { WalletType } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import CardListItem from '../../../../components/CardList/CardListItem';
import { IconName } from '../../../../components/Icon';
import Heading from '../../../../components/ui/Heading';
import Typography from '../../../../components/ui/Typography';

interface Props {
  icon: IconName;
  title: string;
  description: string;
  type: WalletType;
  onSelect(type: WalletType): void;
}

const WalletItem: FunctionComponent<Props> = ({ icon, title, description, type, onSelect }) => {
  const handleSelect = () => onSelect(type);

  return (
    <CardListItem icon={icon} onClick={handleSelect}>
      <Heading as="h4">{title}</Heading>
      <Typography>{description}</Typography>
    </CardListItem>
  );
};

export default WalletItem;
