import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/ui/Container';
import Typography from '../../components/ui/Typography';
import { useSelector, useWallet } from '../../hooks';
import { startSearching } from '../../store/derivation';

const Search: FunctionComponent = () => {
  const derivationPaths = useSelector(state => state.derivation.derivationPaths);
  const dispatch = useDispatch();
  const wallet = useWallet();

  useEffect(() => {
    if (wallet) {
      dispatch(startSearching());
    }
  }, [wallet]);

  return (
    <Container>
      <Typography>Searching</Typography>
      <pre>{JSON.stringify(derivationPaths, null, 2)}</pre>
    </Container>
  );
};

export default Search;
