const {URL} = require('url');

const {
  extraNodeModules,
  watchFolders,
  setLogEnabled,
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
    enhanceMiddleware(Middleware, Server) {
      return (request, response, next) => {
        setLogEnabled(true);
        // TODO: criar rota para automatizar o vínculo de um módulo local
        // sem necessidade de usar o arquivo "link-local-modules.properties"
        const uri = new URL(request.originalUrl, 'http://localhost');
        console.log({
          uri,
        });
        return Middleware(request, response, next);
      };
    },
  },
};
