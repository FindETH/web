import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import arrowIcon from '../../assets/images/arrow.svg';
import crossIcon from '../../assets/images/cross.svg';
import emailIcon from '../../assets/images/email.svg';
import error2Icon from '../../assets/images/error-2.svg';
import errorIcon from '../../assets/images/error.svg';
import ethereumIcon from '../../assets/images/ethereum.svg';
import githubIcon from '../../assets/images/logos/github.svg';
import ledgerIcon from '../../assets/images/logos/ledger.svg';
import mediumIcon from '../../assets/images/logos/medium.svg';
import trezorIcon from '../../assets/images/logos/trezor.svg';
import twitterIcon from '../../assets/images/logos/twitter.svg';
import offlineIcon from '../../assets/images/offline.svg';
import unavailableIcon from '../../assets/images/unavailable.svg';
import walletIcon from '../../assets/images/wallet.svg';
import { Image } from './Icon.styles';

const SUPPORTED_ICONS = {
  arrow: {
    name: 'Arrow',
    icon: arrowIcon
  },
  cross: {
    name: 'Cross',
    icon: crossIcon
  },
  email: {
    name: 'Email',
    icon: emailIcon
  },
  error: {
    name: 'Error',
    icon: errorIcon
  },
  'error-2': {
    name: 'Error',
    icon: error2Icon
  },
  ethereum: {
    name: 'Ethereum',
    icon: ethereumIcon
  },
  github: {
    name: 'GitHub',
    icon: githubIcon
  },
  ledger: {
    name: 'Ledger',
    icon: ledgerIcon
  },
  medium: {
    name: 'Medium',
    icon: mediumIcon
  },
  offline: {
    name: 'Offline',
    icon: offlineIcon
  },
  trezor: {
    name: 'Trezor',
    icon: trezorIcon
  },
  twitter: {
    name: 'Twitter',
    icon: twitterIcon
  },
  unavailable: {
    name: 'Unavailable',
    icon: unavailableIcon
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
  size?: string;
}

type Props = OwnProps & Omit<DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt'>;

const Icon: FunctionComponent<Props> = ({ icon, name = SUPPORTED_ICONS[icon].name, ref: _, ...rest }) => (
  <Image src={SUPPORTED_ICONS[icon].icon} alt={name} {...rest} />
);

export default Icon;
