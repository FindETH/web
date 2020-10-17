import { FunctionComponent } from 'react';
import { NavigationList } from './Navigation.styles';
import NavigationItem from './NavigationItem';

const Navigation: FunctionComponent = () => (
  <NavigationList>
    <NavigationItem title="Search" to="/" />
    <NavigationItem title="Info" to="/info" />
  </NavigationList>
);

export default Navigation;
