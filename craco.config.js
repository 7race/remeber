const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.path.json');

module.exports = {
  webpack: {
    alias: {
      '@tests-utils': path.resolve(__dirname, 'src/tests-utils'),
      '@atoms': path.resolve(__dirname, 'src/atoms'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};
