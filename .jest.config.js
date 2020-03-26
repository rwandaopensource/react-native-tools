module.exports = {
  displayName: "",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).js"],
  verbose: true,
  collectCoverage: true,
  clearMocks: true,
  collectCoverageFrom: [
    "lib/**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
    "!**/dist/**"
  ]
};
