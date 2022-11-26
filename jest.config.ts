import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/build/**',
    '!**/coverage/**',
    '!**/pages/_app.tsx',
    '!**/pages/_document.tsx',
    '!jest.config.js',
    '!.eslintrc.js',
    '!lint-staged.config.js',
    '!next.config.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@web/(.*)$': '<rootDir>/$1',
  },
};

export default createJestConfig(customJestConfig);
