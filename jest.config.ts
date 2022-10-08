import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
  },
};

export default config;