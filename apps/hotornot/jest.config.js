module.exports = {
  name: 'hotornot',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hotornot',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
