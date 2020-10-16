import { WalletType } from '@findeth/wallets';
import { FunctionComponent } from 'react';
import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';
import Heading from '../../../components/ui/Heading';
import { useDispatch, useSelector } from '../../../hooks';
import { setWalletType } from '../../../store/wallet';
import { FlowComponentProps } from '../Flow';
import { WalletList } from './Wallet.styles';
import WalletItem from './WalletItem';

type Props = FlowComponentProps;

const Wallet: FunctionComponent<Props> = ({ onNext }) => {
  const type = useSelector(state => state.wallet.type);
  const dispatch = useDispatch();

  const handleSelect = (next: WalletType) => dispatch(setWalletType(next));

  const handleNext = () => {
    if (type) {
      onNext();
    }
  };

  return (
    <Container>
      <Heading as="h2">Unlock your account</Heading>
      <WalletList>
        {Object.keys(WalletType).map(key => (
          <WalletItem key={key} type={key as WalletType} isSelected={type === key} onSelect={handleSelect} />
        ))}
      </WalletList>
      <Button onClick={handleNext}>Next</Button>
    </Container>
  );
};

export default Wallet;
