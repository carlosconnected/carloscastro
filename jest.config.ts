import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^next/image$": "<rootDir>/__mocks__/next/image.tsx",
    "^next/link$": "<rootDir>/__mocks__/next/link.tsx",
  },
  collectCoverageFrom: [
    "lib/**/*.ts",
    "components/**/*.tsx",
    "!**/*.test.ts",
    "!**/*.test.tsx",
  ],
};

export default config;
