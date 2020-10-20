import { getFullPath } from '@findeth/wallets';
import { navigate } from 'gatsby';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Blockie from '../../components/Blockie';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import { CardContent } from '../../components/Card/Card.styles';
import Container from '../../components/Container';
import Table, { TableCell } from '../../components/Table';
import Typography from '../../components/Typography';
import { getBalance } from '../../utils/balance';
import { useSelector } from '../../utils/hooks';
import { startSearching, stopSearching } from './types';

const Search: FunctionComponent = () => {
  const wallet = useSelector((state) => state.search.wallet);
  const addresses = useSelector((state) => state.search.derivedAddresses);
  const isSearching = useSelector((state) => state.search.isSearching);
  const currentDerivationPath = useSelector((state) => state.search.currentDerivationPath);
  const currentIndex = useSelector((state) => state.search.currentIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!wallet) {
      navigate('/');
      return;
    }
  }, []);

  const handleToggle = (): void => {
    if (isSearching) {
      dispatch(stopSearching());
      return;
    }

    dispatch(startSearching());
  };

  return (
    <>
      <Card>
        <CardContent>
          {isSearching ? (
            <Typography>{getFullPath(currentDerivationPath, currentIndex)}</Typography>
          ) : (
            <Typography>Click on the button to start searching</Typography>
          )}
          <Button data-test-id="toggle-search" onClick={handleToggle} variant="primary">
            {isSearching ? 'Stop searching' : 'Start searching'}
          </Button>
        </CardContent>
      </Card>

      <Container small={true}>
        <Table columns={['Address', 'Derivation Path', 'Balance']}>
          {addresses.length === 0 && (
            <tr>
              <TableCell as="td" colSpan={3}>
                No addresses found yet...
              </TableCell>
            </tr>
          )}

          {addresses.map(({ address, derivationPath, balances }, index) => (
            <tr key={index}>
              <TableCell>
                <Blockie address={address} /> {address}
              </TableCell>
              <TableCell>{derivationPath}</TableCell>
              <TableCell>{balances ? getBalance(balances.native) : 'n/a'}</TableCell>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default Search;
