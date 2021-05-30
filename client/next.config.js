require('dotenv').config()

module.exports = {
  env: {
    PUBLIC_API_URL: process.env.PUBLIC_API_URL,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};
