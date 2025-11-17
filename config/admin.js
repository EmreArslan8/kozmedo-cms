const crypto = require('crypto');

module.exports = {
  apiToken: {
    salt: process.env.API_TOKEN_SALT || crypto.randomBytes(16).toString('base64'),
  },

  auth: {
    secret: process.env.ADMIN_JWT_SECRET || crypto.randomBytes(16).toString('base64'),
  },
  app: {
    projectName: "Kozmedo",   // ← BURASI
    logo: null,
  },
};
