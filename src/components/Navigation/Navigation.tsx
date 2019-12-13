import React, { FunctionComponent } from 'react';
import { NavigationItems } from './Navigation.styles';
import NavigationItem from './NavigationItem';

const NAVIGATION_ITEMS = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Start',
    path: '/start'
  },
  {
    text: 'FAQ',
    path: '/faq'
  }
];

const Navigation: FunctionComponent = () => (
  <NavigationItems>
    {NAVIGATION_ITEMS.map(item => (
      <NavigationItem key={`navigation-${item.path}`} to={item.path}>
        {item.text}
      </NavigationItem>
    ))}
  </NavigationItems>
);

export default Navigation;
