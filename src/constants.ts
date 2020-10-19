export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_LOCAL = IS_DEVELOPMENT || !!process.env.IS_LOCAL;
