import { ERROR_MAP, getErrorMessage, LedgerError } from './errors';

const spy = jest.spyOn(console, 'error');
spy.mockImplementation(() => undefined);

afterEach(() => {
  spy.mockClear();
});

describe('getErrorMessage', () => {
  it('returns a readable error message', () => {
    const error = new Error('foo bar');
    expect(getErrorMessage(error)).toBe('foo bar');
  });

  it('returns a pretty error message', () => {
    const error = new Error('foo bar') as LedgerError;
    error.name = 'TransportStatusError';
    error.statusCode = 0x6700;

    expect(getErrorMessage(error)).toBe(ERROR_MAP[0x6700]);
  });

  it('prints the error in the console', () => {
    const error = new Error('foo bar');
    getErrorMessage(error);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(error);
  });
});
