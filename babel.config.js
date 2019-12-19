module.exports = {
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "modules": "commonjs",
        "targets": {
          "chrome": "78",
          "firefox": "70"
        }
      }
    ]
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
            "corejs": 3,
            "version": "^7.7.6"
          }
        ]
      ]
    },
    "production": {
      "plugins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "corejs": 3,
            "version": "^7.7.6"
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
