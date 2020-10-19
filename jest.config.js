module.exports = {
  roots: ['src/'],
  moduleNameMapper: {
    '\\.(woff|woff2|svg)$': '<rootDir>/jest/fileMock.ts'
  },
  collectCoverageFrom: ['**/*.ts?(x)', '!**/*.d.ts', '!jest/**/*'],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./jest/setupTests.ts'],
  snapshotResolver: './jest/snapshotResolver.js',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
