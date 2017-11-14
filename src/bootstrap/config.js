/**
 * Config
 * @type {Object}
 */
const config = {
  env: process.env.NODE_ENV,
  PROD: process.env.NODE_ENV === 'production',
};

export default config;
