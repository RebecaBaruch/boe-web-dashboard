module.exports = {
  mutate: ['src/**/*.ts?(x)'],
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off',
  jest: {
    configFile: 'jest.config.js',
  },
};
