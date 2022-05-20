const { buildEmberPlugins } = require('ember-cli-babel');

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          targets: require('./config/targets')
        }
        // require.resolve('babel-preset-react-app')
      ]
    ],
    plugins: [
      // if you want external helpers
      [
        require.resolve('@babel/plugin-transform-runtime'),
        {
          version: require('@babel/plugin-transform-runtime/package').version,
          regenerator: false,
          useESModules: true
        }
      ],
      // this is where all the ember required plugins would reside
      ...buildEmberPlugins(__dirname, { /*customOptions if you want to pass in */ })
    ]
  };
};

