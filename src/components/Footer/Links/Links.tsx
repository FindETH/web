import { FunctionComponent } from 'react';
import Link from '../../Link';
import { LinksContainer } from './Links.styles';

const FOOTER_LINKS = [
  {
    title: 'About',
    to: '/info'
  },
  {
    title: 'Blog',
    to: 'https://medium.com/findeth',
    external: true
  },
  {
    title: 'Donations',
    to: 'https://etherscan.io/address/0xb08b2cae713496217707b8aefee156b49d0fd889',
    external: true
  },
  {
    title: 'Gitcoin Grant',
    to: 'https://gitcoin.co/grants/914/findeth',
    external: true
  }
];

const Links: FunctionComponent = () => (
  <LinksContainer>
    {FOOTER_LINKS.map(({ title, ...rest }) => (
      <Link key={title} {...rest}>
        {title}
      </Link>
    ))}
  </LinksContainer>
);

export default Links;
