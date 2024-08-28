/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  roots: ["test/jest"],
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};