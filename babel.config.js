module.exports = {
  presets: [
    'babel-preset-gatsby',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          chrome: '78',
          firefox: '70'
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 3,
            version: '^7.7.6',
            useESModules: true
          }
        ]
      ]
    }
  }
};
