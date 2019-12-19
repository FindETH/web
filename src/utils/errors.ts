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
    // tslint:disable-next-line
    console.error(error);
  }

  return error.message ?? error.toString();
};
