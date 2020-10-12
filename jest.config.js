module.exports = {
  roots: ['src/'],
  moduleNameMapper: {
    '\\.(woff|woff2|svg)$': '<rootDir>/jest/fileMock.ts'
  },
  collectCoverageFrom: ['**/*.ts?(x)', '!**/*.d.ts', '!jest/**/*'],
  setupFilesAfterEnv: ['./jest/setupTests.ts'],
  snapshotResolver: './jest/snapshotResolver.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
};
