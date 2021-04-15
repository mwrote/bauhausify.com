const merge = require('webpack-merge');

module.exports = ({ config }) => {
  // storysource
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  const mergedConfig = merge(config, {
    module: {
      rules: [
        {
          test: /\.(mjs|jsx?)$/,
          exclude: [
              /node_modules\/(?!(Gatsby)\/)/,
          ],
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  require.resolve("@babel/preset-react"),
                  require.resolve("@babel/preset-env"),
                ],
                plugins: [
                  require.resolve("@babel/plugin-proposal-class-properties"),
                ],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      mainFields: ['browser', 'module', 'main'],
    },
  });
  return mergedConfig;
};
