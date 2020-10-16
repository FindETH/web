import { FunctionComponent } from 'react';
import { ExternalLink, RouterLink } from './Link.styles';

interface Props {
  to: string;
  external?: boolean;
}

const Link: FunctionComponent<Props> = ({ to, external = false, children }) => {
  if (external) {
    return <ExternalLink href={to}>{children}</ExternalLink>;
  }

  return <RouterLink to={to}>{children}</RouterLink>;
};

export default Link;
