import environment from './base';

const baseApi = ''; // https://api.example.com
const env = environment(baseApi);

const productionEnv = {
  ...env,
  // override anything that gets added in here
};

export default productionEnv;
