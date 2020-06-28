import environment, { Environment } from './base';

const baseApi = ''; // https://api.example.com
const env = environment(baseApi);

const developmentEnv: Environment = {
  ...env,
  api: {
    ...env.api,
    // override endpoint in here
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
