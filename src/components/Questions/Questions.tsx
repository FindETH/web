import React, { FunctionComponent } from 'react';
import Link from '../Link';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Typography from '../ui/Typography';
import Question from './Question';

const Questions: FunctionComponent = () => (
  <Section>
    <Container>
      <Question title="Is this tool safe?">
        <Typography>
          The code is open-source and available on{' '}
          <Link to="https://github.com/FindETH/web" external={true}>
            GitHub
          </Link>
          . If you don't trust the hosted version, you can run it locally too, with the instructions provided on GitHub.
          For safety reasons, you have to run it offline, if you want to search using a mnemonic phrase.
        </Typography>
        <Typography>
          To make sure you are on the real version of FindETH, double check that the URL is "findeth.io" and that there
          are no SSL errors.
        </Typography>
      </Question>

      <Question title="How does it work?">
        <Typography>
          FindETH works by searching through any hierarchical deterministic wallet, using many commonly used derivation
          paths. Hierarchical deterministic wallets are wallets like Ledger and Trezor devices, and mnemonic phrases,
          that are able to derive many addresses from a single seed. FindETH will search through the most common
          derivation paths, offered by some of the popular wallets.
        </Typography>
        <Typography>
          Currently, FindETH is limited to a fixed set of derivation paths. Custom derivation paths are not supported,
          but support for more derivation paths is planned for the future.
        </Typography>
      </Question>

      <Question title="Can I use my private key or keystore file?">
        <Typography>
          No, private keys and keystore files are not supported, because they are not hierarchical deterministic
          wallets. A private key or keystore file only has a single address, unlike mnemonic phrases and hardware
          wallets.
        </Typography>
      </Question>

      <Question title="Can I run FindETH offline?">
        <Typography>
          It is possible to run FindETH offline, as the core functionality does not require an internet connection. Keep
          in mind that you cannot search for Ether or tokens on your address while offline, only for addresses.
        </Typography>
      </Question>

      <Question title="How can I reach out to you?">
        <Typography>
          If you have any questions regarding FindETH, feel free to send an email to{' '}
          <Link to="mailto:info@findeth.io" external={true}>
            info@findeth.io
          </Link>
          .
        </Typography>
      </Question>
    </Container>
  </Section>
);

export default Questions;
