import environment, { Environment } from './base';

const baseApi = ''; // https://api.example.com
const env = environment(baseApi);

const testEnv: Environment = {
  ...env,
  // override anything that gets added in here,
  isProduction: false,
  isDevelopment: false,
  isTesting: true,
};

export default testEnv;
