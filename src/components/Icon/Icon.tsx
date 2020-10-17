import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import arrowIcon from '../../assets/images/arrow.svg';
import ethereumIcon from '../../assets/images/ethereum.svg';
import ledgerIcon from '../../assets/images/logos/ledger.svg';
import trezorIcon from '../../assets/images/logos/trezor.svg';
import walletIcon from '../../assets/images/wallet.svg';
import { Image } from './Icon.styles';

const SUPPORTED_ICONS = {
  arrow: {
    name: 'Arrow',
    icon: arrowIcon
  },
  ethereum: {
    name: 'Ethereum',
    icon: ethereumIcon
  },
  ledger: {
    name: 'Ledger',
    icon: ledgerIcon
  },
  trezor: {
    name: 'Trezor',
    icon: trezorIcon
  },
  wallet: {
    name: 'Wallet',
    icon: walletIcon
  }
};

export type IconName = keyof typeof SUPPORTED_ICONS;

export interface OwnProps {
  icon: IconName;
  name?: string;
}

type Props = OwnProps & Omit<DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt'>;

const Icon: FunctionComponent<Props> = ({ icon, name = SUPPORTED_ICONS[icon].name, ref: _, ...rest }) => (
  <Image src={SUPPORTED_ICONS[icon].icon} alt={name} {...rest} />
);

export default Icon;
