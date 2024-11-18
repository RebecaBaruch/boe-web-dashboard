module.exports = {
  mutate: [
    'src/**/*.js',
    'src/**/*.ts',
    'src/**/*.tsx',
  ],
  mutator: 'typescript',
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'all',
  jest: {
    configFile: 'jest.config.js',
  },
};
