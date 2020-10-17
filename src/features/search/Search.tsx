import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/ui/Container';
import Typography from '../../components/ui/Typography';
import { useSelector } from '../../hooks';
import { startSearching } from './types';

const Search: FunctionComponent = () => {
  const derivationPaths = useSelector(state => state.search.derivationPaths);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startSearching());
  }, []);

  return (
    <Container>
      <Typography>Searching</Typography>
      <pre>{JSON.stringify(derivationPaths, null, 2)}</pre>
    </Container>
  );
};

export default Search;
