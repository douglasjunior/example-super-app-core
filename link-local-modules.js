const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const chokidar = require('chokidar');

const dotFilePath = path.resolve(__dirname, 'link-local-modules.properties');
const localModulesPath = path.resolve(__dirname, 'local_modules');

fs.rmSync(localModulesPath, {force: true, recursive: true});
fs.mkdirSync(localModulesPath, {recursive: true});

function ensureDirectoryExistence(dirPath) {
  const dirname = path.dirname(dirPath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, {recursive: true});
  }
}

function readLocalModulesConfig() {
  const buf = fs.readFileSync(dotFilePath, {encoding: 'utf-8'});
  return dotenv.parse(buf);
}

function makeLinkedModulePath(moduleName) {
  const linkedPath = path.resolve(localModulesPath, moduleName);
  ensureDirectoryExistence(linkedPath);
  return linkedPath;
}

function watchAndSyncModule(modulePath, linkedModulePath) {
  function getLinkedFilePath(originalPath) {
    return originalPath.replace(modulePath, linkedModulePath);
  }

  function copyAddedOrChangedFile(originalPath) {
    const tempUpdatedPath = getLinkedFilePath(originalPath);
    ensureDirectoryExistence(tempUpdatedPath);
    fs.copyFileSync(originalPath, tempUpdatedPath);
  }

  function unlinkDeletedFile(originalPath) {
    const tempUpdatedPath = getLinkedFilePath(originalPath);
    fs.unlinkSync(tempUpdatedPath);
  }

  const watcher = chokidar.watch(modulePath, {
    // ignore dotfiles, nome_modules, android and ios folders
    ignored: /((^|[/\\])\..|node_modules|android|ios)/,
    ignoreInitial: false,
    awaitWriteFinish: {
      pollInterval: 500,
      stabilityThreshold: 500,
    },
  });

  watcher
    .on('add', originalPath => {
      console.log('\x1b[34m', `File ${originalPath} has been added`, '\x1b[0m');
      copyAddedOrChangedFile(originalPath);
    })
    .on('change', originalPath => {
      console.log(
        '\x1b[32m',
        `File ${originalPath} has been changed`,
        '\x1b[0m',
      );
      copyAddedOrChangedFile(originalPath);
    })
    .on('unlink', originalPath => {
      console.log(
        '\x1b[35m',
        `File ${originalPath} has been removed`,
        '\x1b[0m',
      );
      unlinkDeletedFile(originalPath);
    });
}

function linkModules() {
  if (!fs.existsSync(dotFilePath)) {
    return {};
  }

  const modulesToLink = readLocalModulesConfig();

  const modulesNames = Object.keys(modulesToLink);

  return modulesNames.reduce((config, moduleName) => {
    const modulePath = modulesToLink[moduleName];
    const linkedModulePath = makeLinkedModulePath(moduleName);

    watchAndSyncModule(modulePath, linkedModulePath);

    console.log('\x1b[42m', 'Linking module: ' + moduleName, '\x1b[0m');

    return {
      ...config,
      [moduleName]: linkedModulePath,
    };
  }, {});
}

const linkedLocalModules = linkModules();

const extraNodeModules = new Proxy(
  // Provide the set of known local package mappings.
  linkedLocalModules,
  {
    // Provide a mapper function, which uses the above mappings for associated package ids,
    // otherwise fall back to the standard behavior and just look in the node_modules directory.
    get: (target, name) => {
      return name in target
        ? target[name]
        : path.join(__dirname, `node_modules/${name}`);
    },
  },
);

const watchFolders = Object.values(linkedLocalModules);

module.exports = {
  extraNodeModules,
  watchFolders,
};
