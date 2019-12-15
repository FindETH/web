const IS_TEST = process.env.NODE_ENV === 'test';

module.exports = {
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    "react-hot-loader/babel",
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-transform-runtime",
      {
        "useESModules": !IS_TEST,
        "regenerator": true,
        "corejs": 3
      }
    ]
  ]
};
