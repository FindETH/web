/**
 * Get the error message from an Error object. If the error does not have a message, it will return `error.toString()`.
 *
 * TODO: Prettify error messages
 *
 * @param {Error} error
 * @return {string}
 */
export const getErrorMessage = (error: Error): string => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return error.message ?? error.toString();
};
