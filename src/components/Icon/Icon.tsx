import { FunctionComponent } from 'react';
import arrowIcon from '../../assets/images/arrow.svg';
import { Image } from './Icon.styles';

const SUPPORTED_ICONS = {
  arrow: {
    name: 'Arrow',
    icon: arrowIcon
  }
};

type Icon = keyof typeof SUPPORTED_ICONS;

interface Props {
  icon: Icon;
  name?: string;
}

const Icon: FunctionComponent<Props> = ({ icon, name = SUPPORTED_ICONS[icon].name }) => (
  <Image src={SUPPORTED_ICONS[icon].icon} alt={name} />
);

export default Icon;
