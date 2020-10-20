import { Balance } from '../types/search';

/**
 * Divide two bigints and return the result as string with decimals.
 *
 * @param {bigint} a
 * @param {bigint} b
 * @param {number} decimals
 * @return {string}
 */
const divide = (a: bigint, b: bigint, decimals: number): string => {
  const n = (a * BigInt('1' + '0'.repeat(decimals))) / b;
  const string = n.toString(10);

  return `${string.slice(0, -decimals)}.${string.slice(-decimals).replace(/\.?0+$/, '')}`;
};

/**
 * Format a bigint string as number with decimals string.
 *
 * @param {Balance} balance
 * @param {bigint} [decimals]
 * @return {string}
 */
export const getBalance = (balance: Balance, decimals = 18n): string => {
  const bigint = BigInt(balance);
  const divisor = 10n ** decimals;

  return divide(bigint, divisor, Number(decimals));
};
