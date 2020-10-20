import { Balance } from '../types/search';
import { getBalance } from './balance';

describe('getBalance', () => {
  it('returns the formatted balance as a string', () => {
    expect(getBalance('12345678900000000000' as Balance)).toBe('12.3456789');
  });
});
