const metroHandleSyncRequest = require('example-super-app-tools/lib/metro-handle-sync-request');

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
    enhanceMiddleware: metroHandleSyncRequest,
  },
};
