import blockies from 'blockies-ts';

/**
 * Returns an address blockie as base64 string.
 *
 * @param {string} address
 * @return {string}
 */
export const getBlockie = (address: string): string => {
  return blockies.create({ seed: address }).toDataURL();
};
