const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const {
  extraNodeModules,
  moduleExclusions,
  moduleMappings,
} = require('./processModuleSymLinks.js');

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
    extraNodeModules: extraNodeModules,
    blockList: exclusionList(moduleExclusions),
  },

  projectRoot: path.resolve(__dirname),

  // Also additionally watch all the mapped local directories for changes to support live updates.
  watchFolders: Object.values(moduleMappings),
};
