const { TEST_MODE } = process.env;

let testMatch;

switch (TEST_MODE) {
  case 'snapshot':
    testMatch = ['<rootDir>/tests/snapshot/**/*.spec.[tj]s?(x)'];
    break;
  case 'visual':
    testMatch = ['<rootDir>/tests/visual/**/*.spec.[tj]s?(x)'];
    break;
  default:
    testMatch = ['<rootDir>/tests/unit/**/*.spec.[tj]s?(x)'];
    break;
}

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch,
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
}
