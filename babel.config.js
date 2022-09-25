const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push(
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
);

module.exports = {
  presets,
  plugins,
};
