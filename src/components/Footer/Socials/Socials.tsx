import { FunctionComponent } from 'react';
import Icon from '../../Icon';
import Link from '../../Link';
import { SocialsContainer } from './Socials.styles';

const SOCIALS_LINKS = [
  {
    title: 'GitHub',
    to: 'https://github.com/FindETH',
    icon: 'github'
  },
  {
    title: 'Medium',
    to: 'https://medium.com/findeth',
    icon: 'medium'
  },
  {
    title: 'Email',
    to: 'mailto:info@findeth.io',
    icon: 'email'
  },
  {
    title: 'Twitter',
    to: 'https://twitter.com/FindETHio',
    icon: 'twitter'
  }
] as const;

const Socials: FunctionComponent = () => (
  <SocialsContainer>
    {SOCIALS_LINKS.map(({ title, to, icon }) => (
      <Link key={title} to={to} external={true}>
        <Icon size="1.5rem" icon={icon} title={title} />
      </Link>
    ))}
  </SocialsContainer>
);

export default Socials;
