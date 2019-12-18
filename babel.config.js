const IS_TEST = process.env.NODE_ENV === 'test';

module.exports = {
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "plugins": [
    "react-hot-loader/babel",
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining"
  ],
  "env": {
    "development": {
      "plugins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "useESModules": true,
            "regenerator": true
          }
        ]
      ]
    },
    "production": {
      "plugins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "useESModules": true,
            "regenerator": true
          }
        ]
      ]
    },
    "test": {
      "plugins": [
        "@babel/plugin-transform-modules-commonjs"
      ]
    }
  }
};
