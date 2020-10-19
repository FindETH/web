// TODO: Add more errors
export const ERROR_MAP: Record<string | number, string> = {
  0x6700: 'Failed to connect to the device. Make sure you have the right app open on the device.',
  0x6804: 'Failed to connect to the device. Make sure the device is unlocked.',
  0x6d00: 'Failed to connect to the device. Make sure you have the right app open on the device.'
};

export interface LedgerError extends Error {
  statusCode?: number;
}

/**
 * Get whether an error is an error returned by Ledger.js.
 *
 * https://github.com/LedgerHQ/ledgerjs/tree/master/packages/errors
 *
 * @param {Error} error
 * @return {boolean}
 */
export const isLedgerError = (error: Error): error is LedgerError => {
  return error.name === 'TransportError' || error.name === 'TransportStatusError';
};

/**
 * Get the error message from an Error object. If the error does not have a message, it will return `error.toString()`.
 *
 * @param {Error} error
 * @return {string}
 */
export const getErrorMessage = (error: Error): string => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  if (isLedgerError(error) && error.statusCode) {
    const message = ERROR_MAP[error.statusCode];
    if (message) {
      return message;
    }
  }

  return error.message ?? error.toString();
};
