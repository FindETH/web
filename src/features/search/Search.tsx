import { navigate } from 'gatsby';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Blockie from '../../components/Blockie';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import { CardContent } from '../../components/Card/Card.styles';
import Container from '../../components/Container';
import Table, { TableCell } from '../../components/Table';
import { useSelector } from '../../utils/hooks';
import { startSearching, stopSearching } from './types';

const Search: FunctionComponent = () => {
  const wallet = useSelector(state => state.search.wallet);
  const addresses = useSelector(state => state.search.derivedAddresses);
  const isSearching = useSelector(state => state.search.isSearching);
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
          <Button onClick={handleToggle}>{isSearching ? 'Stop searching' : 'Start searching'}</Button>
        </CardContent>
      </Card>

      <Container small={true}>
        <Table columns={['Address', 'Derivation Path']}>
          {addresses.length === 0 && (
            <tr>
              <TableCell as="td" colSpan={2}>
                No addresses found yet...
              </TableCell>
            </tr>
          )}

          {addresses.map(({ address, derivationPath }, index) => (
            <tr key={index}>
              <TableCell>
                <Blockie address={address} /> {address}
              </TableCell>
              <TableCell>{derivationPath}</TableCell>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default Search;
