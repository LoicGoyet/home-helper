const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config.resolve.alias = {
    ...config.resolve.alias,

    api: path.resolve(__dirname, "../src/api/"),
    components: path.resolve(__dirname, "../src/components/"),
    container: path.resolve(__dirname, "../src/container/"),
    ducks: path.resolve(__dirname, "../src/ducks/"),
    fixtures: path.resolve(__dirname, "../src/fixtures/"),
    icons: path.resolve(__dirname, "../src/icons/"),
    router: path.resolve(__dirname, "../src/router/"),
    style: path.resolve(__dirname, "../src/style/"),
    utils: path.resolve(__dirname, "../src/utils/"),
    views: path.resolve(__dirname, "../src/views/"),
    config: path.resolve(__dirname, "../src/config/"),
    storybook: path.resolve(__dirname, "../.storybook"),
  }

  // Return the altered config
  return config;
};
