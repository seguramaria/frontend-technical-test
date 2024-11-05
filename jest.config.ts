import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: ["components/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

export default config;
