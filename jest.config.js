module.exports = {
  testEnvironment: 'jsdom',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!example-super-app-.*|@react-navigation|@react-native|react-native)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
};
