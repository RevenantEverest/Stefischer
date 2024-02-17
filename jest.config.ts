import type { Config } from 'jest';

const jestConfig: Config = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    rootDir: "src",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
};

export default jestConfig;