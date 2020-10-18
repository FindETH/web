module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace('src/', 'jest/snapshots/') + snapshotExtension;
  },

  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath.replace('jest/snapshots/', 'src/').slice(0, -snapshotExtension.length);
  },

  testPathForConsistencyCheck: 'src/component/example.js'
};
