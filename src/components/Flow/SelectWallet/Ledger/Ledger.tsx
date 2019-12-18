import { WalletType } from '@findeth/wallets';
import { AnimatePresence } from 'framer-motion';
import React, { FunctionComponent, useState } from 'react';
import ledgerIcon from '../../../../assets/images/logos/ledger.svg';
import PanelItem from '../../../PanelItem';
import Heading from '../../../ui/Heading';
import Typography from '../../../ui/Typography';
import { LedgerMenu, LedgerMenuItem } from './Ledger.styles';

interface Props {
  onSelect(wallet: WalletType): void;
}

const Ledger: FunctionComponent<Props> = ({ onSelect }) => {
  const [isExtended, setExtended] = useState(false);

  const handleClick = () => {
    setExtended(!isExtended);
  };

  const handleSelectUSB = () => {
    onSelect(WalletType.Ledger);
  };

  const handleSelectBLE = () => {
    // TODO
    onSelect(WalletType.Ledger);
  };

  return (
    <PanelItem
      title="Ledger Wallet"
      description="Use your Ledger Nano X or S"
      icon={ledgerIcon}
      highlight={isExtended}
      onClick={handleClick}>
      <AnimatePresence>
        {isExtended && (
          <LedgerMenu
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              open: {
                opacity: 1,
                height: 'auto',
                marginTop: '1rem'
              },
              collapsed: {
                opacity: 0,
                height: 0,
                marginTop: '0rem'
              }
            }}>
            <LedgerMenuItem onClick={handleSelectUSB}>
              <Heading as="h4">USB</Heading>
              <Typography>Connect with a USB cable</Typography>
            </LedgerMenuItem>
            <LedgerMenuItem onClick={handleSelectBLE}>
              <Heading as="h4">Bluetooth</Heading>
              <Typography>Connect with Bluetooth</Typography>
            </LedgerMenuItem>
          </LedgerMenu>
        )}
      </AnimatePresence>
    </PanelItem>
  );
};

export default Ledger;
