/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },

  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
//
  verbose: true,
  // verbose: false,

  //
  // automock: true,
  // bail: false,
  cacheDirectory: './.tmp/jest',
  clearMocks: false,
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.[jt]s'],
  coverageDirectory: './coverage',
  // coveragePathIgnorePatterns: [],
  // // coverageProvider: '',
  // 'coverageReporters': ['json', 'lcov', 'text', 'clover'],
  // 'coverageThreshold': {
  //   'global': {
  //     branches: 50,
  //     functions: 50,
  //     lines: 50,
  //     statements: 50,
  //   },
  //   './src/utils/**/*.ts': {
  //     branches: 40,
  //     statements: 40,
  //   },
  //   './src/reducers/**/*.ts': {
  //     statements: 90,
  //   },
  //   './src/api/**/*.ts': {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  // dependencyExtractor: '',
  // displayName: [],
  // errorOnDeprecated: true,
  // extraGlobals: [],
  // forceCoverageMatch: [],
  // globals: {},
  // globalSetup: '',
  // globalTeardown: '',
  // haste: {},
  // injectGlobals: true, // false
  // maxConcurrency: 0,
  // moduleDirectories: [], // [] ['array<string>'],
  // moduleFileExtensions: [], // [] ['array<string>'],
  // moduleNameMapper: [], // [] ["object<string, string | 'array<string>>'"],
  // modulePathIgnorePatterns: [], // [] ['array<string>'],
  // modulePaths: [], // [] ['array<string>'],
  notify: false,
  notifyMode: 'change',
  // preset: '[string]',
  // prettierPath: '[string]',
  // projects: [], // [] ['array<string | ProjectConfig>'],
  // reporters: [], // [] ['array<moduleName | [moduleName, options]>'],
  // resetMocks: true, // false
  // resetModules: true, // false
  // resolver: '[string]',
  // restoreMocks: true, // false
  // rootDir: '[string]',
  // roots: [], // [] ['array<string>'],
  // runner: '[string]',
  // setupFiles: [], // [] ['array'],
  // setupFilesAfterEnv: [], // [] ['array'],
  // slowTestThreshold: 0,
  // snapshotResolver: '[string]',
  // snapshotSerializers: [], // [] ['array<string>'],
  // testEnvironment: '[string]',
  // testEnvironmentOptions: {},
  // testFailureExitCode: 0,
  testMatch: [
    './src/**/tests/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ], // [] ['array<string>'],
  testPathIgnorePatterns: [
    './out'
  ]
  // testPathIgnorePatterns: [], // [] ['array<string>'],
  // testRegex: [], // [] ["string | 'array<string>'"],
  // testResultsProcessor: '[string]',
  // testRunner: '[string]',
  // testSequencer: '[string]',
  // testTimeout: 0,
  // testURL: '[string]',
  // timers: '[string]',
  // transform: [], // [] [
  // // 'object<string, pathToTransformer | [pathToTransformer, object]>',
  // // ],
  // transformIgnorePatterns: [], // [] ['array<string>'],
  // unmockedModulePathPatterns: [], // [] ['array<string>'],
  // watchPathIgnorePatterns: [], // [] ['array<string>'],
  // watchPlugins: [], // [] ['array<string | [string, Object]>'],
  // 'watchman': true,
  // '//': 'Comment goes here',
};
