const handleSyncRequest = require('./metro-handle-sync-request');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },

  server: {
    enhanceMiddleware: handleSyncRequest,
  },
};
