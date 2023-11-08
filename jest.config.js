const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest', // Utilisez le preset TypeScript
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest', // Utilisez Babel pour transpiler les fichiers
  },
};

module.exports = createJestConfig(config);
