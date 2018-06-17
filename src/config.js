import nodeEnv from './utils/nodeEnv';

export default {
  USE_MOCK: !nodeEnv.isProd,
};
