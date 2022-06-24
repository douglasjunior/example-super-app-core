const {
  extraNodeModules,
  watchFolders,
  handleSyncRequest,
} = require('./link-local-modules');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },

  resolver: {
    extraNodeModules,
  },

  watchFolders,

  server: {
    enhanceMiddleware: handleSyncRequest,
  },
};
