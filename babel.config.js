const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ],
  'react-native-reanimated/plugin',
  'module:react-native-dotenv',
  '@babel/plugin-transform-named-capturing-groups-regex',
];

module.exports = function (api) {
  const NODE_ENV = api.env();

  if (NODE_ENV !== 'development') {
    plugins.push('transform-remove-console');
  }

  return {
    presets,
    plugins,
  };
};
