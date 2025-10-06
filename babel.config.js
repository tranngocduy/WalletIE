module.exports = function (api) {
  const babelEnv = api.env();

  api.cache(true);

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app-api': './src/public/api',
          '@app-builder': './src/builder',
          '@app-locales': './src/locales',
          '@app-screen': './src/screen',
          '@app-store': './src/public/store',
          '@app-theme': './src/public/theme',
          '@app-utils': './src/public/utils',
          '@app-assets': './src/public/assets',
          '@app-secure': './src/public/secure',
          '@app-socket': './src/public/socket',
          '@app-configs': './src/public/configs',
          '@app-useHook': './src/public/useHook',
          '@app-support': './src/public/support',
          '@app-instance': './src/public/instance',
          '@app-assetsV2': './src/public/assetsV2',
          '@app-oneSignal': './src/public/oneSignal',
          '@app-component': './src/public/component'
        }
      }
    ],
    'react-native-worklets/plugin'
  ];

  if (babelEnv !== 'development') plugins.push(['transform-remove-console']);

  return { presets: ['module:@react-native/babel-preset'], plugins };
};
