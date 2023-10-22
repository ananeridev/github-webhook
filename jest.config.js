export default {
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    moduleFileExtensions: ['js', 'json', 'node'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };
  