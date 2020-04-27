
/* if (!process.env.NODE_ENV || !process.env.APP_ENV) {
  throw new Error('The NODE_ENV and APP_ENV environment variable is required.');
} */

const base = {
  APP_ENV: process.env.APP_ENV,
  DEV_MODE: process.env.NODE_ENV === 'development',
};

const config = {
  development: {
  },
  stage: {
  },
  production: {
  },
};
module.exports = {
  ...base,
  ...config[process.env.APP_ENV],
};
