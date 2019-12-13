import React, { FunctionComponent } from 'react';
import Link from '../../Link';
import { StyledNavigationItem } from './NavigationItem.styles';

interface Props {
  to: string;
}

const NavigationItem: FunctionComponent<Props> = ({ to, children }) => (
  <StyledNavigationItem>
    <Link to={to}>{children}</Link>
  </StyledNavigationItem>
);

export default NavigationItem;
