import { FunctionComponent } from 'react';
import Link from '../../../../../components/Link';
import Typography from '../../../../../components/Typography';

const LedgerRecovery: FunctionComponent = () => (
  <Typography>
    <strong>Note:</strong> In order for FindETH to be able to scan all of your addresses, it's recommended to use the
    Ledger ETH Recovery app. For instructions on how to get the ETH Recovery app, please refer to{' '}
    <Link
      to="https://support.mycrypto.com/how-to/hardware-wallets/ledger/how-to-recover-assets-sent-to-the-wrong-address#install-the-eth-recovery-app"
      external={true}>
      this guide
    </Link>
    .
  </Typography>
);

export default LedgerRecovery;
