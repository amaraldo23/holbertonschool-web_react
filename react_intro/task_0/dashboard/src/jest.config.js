module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.png$': '<rootDir>/fileTransformer.js', // This line may be the issue
  },
};
