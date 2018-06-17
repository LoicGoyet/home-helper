const DEV_ENV = process.env.NODE_ENV === 'development';

export default {
  DEV_ENV,
  USE_MOCK: DEV_ENV,
};
