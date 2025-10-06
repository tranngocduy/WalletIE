module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest-setup.js'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest' },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|@react-native/assets|react-native|react-native-gesture-handler|@react-navigation|@testing-library)/)',
  ],
  testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  moduleNameMapper: {  },
  // collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Include all source files in src

    '!src/builder/*.{js,jsx,ts,tsx}', // Exclude test files
    '!src/locales/*.{js,jsx,ts,tsx}', // Exclude test files
    '!src/route/*.{js,jsx,ts,tsx}', // Exclude test files

    '!**/node_modules/**', // Exclude node_modules
    '!**/__tests__/**', // Exclude test folders
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
};
