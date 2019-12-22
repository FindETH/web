import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description?: string;
}

const MetaData: FunctionComponent<Props> = ({ title, description }) => (
  <Helmet>
    <title>{(title && `${title} - FindETH`) ?? 'FindETH'}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta
      name="description"
      content={
        description ??
        'Easily find your lost Ether, tokens, or Ethereum address, by automatically scanning a bunch of derivation paths'
      }
    />
    <meta
      name="keywords"
      content="Ether, Ethereum, ERC20, ERC-20, tokens, address, private key, derivation path, mnemonic phrase, Ledger, Trezor, hardware wallet, lost"
    />
    <meta name="author" content="Maarten Zuidhoorn" />
  </Helmet>
);

export default MetaData;
