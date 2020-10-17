import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
}

const Meta: FunctionComponent<Props> = ({ title }) => (
  <Helmet
    defaultTitle="FindETH"
    title={title}
    titleTemplate="%s - FindETH"
    htmlAttributes={{
      lang: 'en'
    }}
    meta={[
      {
        name: 'description',
        content:
          'Easily find your lost Ether, tokens, or Ethereum address, by automatically scanning a bunch of derivation paths'
      },
      {
        name: 'keywords',
        content:
          'Ether, Ethereum, ERC20, ERC-20, tokens, address, private key, derivation path, mnemonic phrase, Ledger, Trezor, hardware wallet, lost'
      },
      {
        name: 'author',
        content: 'Maarten Zuidhoorn'
      }
    ]}
  />
);

export default Meta;
