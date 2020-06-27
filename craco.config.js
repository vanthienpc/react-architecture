const path = require('path');

module.exports = {
  webpack: {
    alias: {
      environment: path.join(__dirname, 'src', 'environments', process.env.NODE_ENV),
    },
  },
};
