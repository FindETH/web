import { Balance } from '../types/search';
import { getBalance } from './balance';

describe('getBalance', () => {
  it('returns the formatted balance as a string', () => {
    expect(getBalance('12345678900000000000' as Balance)).toBe('12.3456789');
    expect(getBalance('000012345678900000000000' as Balance)).toBe('12.3456789');
    expect(getBalance('1234567890000000' as Balance)).toBe('0.00123456789');

    expect(getBalance('12345678900000000000' as Balance, 10n)).toBe('1,234,567,890');
    expect(getBalance('000012345678900000000000' as Balance, 10n)).toBe('1,234,567,890');
    expect(getBalance('1234567890000000' as Balance, 10n)).toBe('123,456.789');

    expect(getBalance('111111111111111111111111111111111111' as Balance)).toBe(
      '111,111,111,111,111,111.111111111111111111'
    );
    expect(getBalance('111111111111111111111111111111111111' as Balance, 10n)).toBe(
      '11,111,111,111,111,111,111,111,111.1111111111'
    );
  });
});
