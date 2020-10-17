import { FunctionComponent } from 'react';
import NavigationLink from '../NavigationLink';
import { NavigationItemContainer } from './NavigationItem.styles';

interface Props {
  title: string;
  to: string;
}

const NavigationItem: FunctionComponent<Props> = ({ title, to }) => (
  <NavigationItemContainer>
    <NavigationLink to={to}>{title}</NavigationLink>
  </NavigationItemContainer>
);

export default NavigationItem;
