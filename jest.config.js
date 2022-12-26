const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!./src/pages/_app.tsx',
    '!./src/pages/_document.tsx',
    '!./src/theme/**',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/tests/(.*)$': '<rootDir>/src/tests/$1',
    '^@/theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
}

module.exports = createJestConfig(customJestConfig)
