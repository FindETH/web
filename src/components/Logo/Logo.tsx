import React, { FunctionComponent } from 'react';
import logo from '../../assets/images/logos/findeth.svg';
import { LogoImage } from './Logo.styles';

const Logo: FunctionComponent = () => <LogoImage src={logo} alt="FindETH logo" />;

export default Logo;
