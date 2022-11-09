module.exports = {
  transform: {
    '^.+\\.tsx?$': ['ts-jest']
  },
  testEnvironment: 'jsdom',
  roots: ['./tasks'],
  testRegex: '.ts$',
  moduleFileExtensions: ['ts', 'js', 'json']
};
