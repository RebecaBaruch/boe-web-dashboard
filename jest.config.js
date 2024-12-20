import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  verbose: true,
  moduleNameMapper: {
    '^@react-pdf/renderer$': '<rootDir>/tests/__mocks__/reactPdfMock.ts',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    'react-pdf/dist/esm/entry.webpack': 'react-pdf/dist/esm/entry.jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|pdf)$':
      'jest-transform-stub',
  },
  transform: {
    '^.+\\.(t)s$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@react-pdf)/'],
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}', '!src/**/*.d.ts'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
