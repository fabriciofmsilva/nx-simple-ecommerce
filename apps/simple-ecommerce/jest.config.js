module.exports = {
  name: "simple-ecommerce",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/simple-ecommerce/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
