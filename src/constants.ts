export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
export const IS_LOCAL = IS_DEVELOPMENT || !!process.env.IS_LOCAL;
