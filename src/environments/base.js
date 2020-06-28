/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 */
export default function baseEnv(baseApi) {
  return {
    api: {
      // definition endpoints in here
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
