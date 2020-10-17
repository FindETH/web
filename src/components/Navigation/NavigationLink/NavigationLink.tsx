import { AnchorHTMLAttributes, DetailedHTMLProps, FunctionComponent, MouseEvent } from 'react';
import { useSelector } from '../../../hooks';
import { LinkWrapper } from './NavigationLink.styles';

interface OwnProps {
  to: string;
}

type Props = OwnProps & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'>;

const NavigationLink: FunctionComponent<Props> = ({ to, children, ref: _, ...rest }) => {
  const isFlow = useSelector(state => state.derivation.isFlow);

  const handleClick = (event: MouseEvent) => {
    // TODO: Show modal with confirmation
    if (isFlow) {
      event.persist();
    }
  };

  return (
    <LinkWrapper to={to} onClick={handleClick} activeClassName="active" {...rest}>
      {children}
    </LinkWrapper>
  );
};

export default NavigationLink;
