import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Typography from '../../components/Typography';
import { useSelector } from '../../utils/hooks';
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
