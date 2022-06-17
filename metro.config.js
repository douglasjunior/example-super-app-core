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
    extraNodeModules: {
      // Permite rodar o Core com live reload nos mini-apps
      // 'mini-app-package-name': '/path/to/mini-app/folder',
      'example-super-app-mini-1': '../example-super-app-mini-1',
      'example-super-app-mini-2': '../example-super-app-mini-2',
    },
  },
};
