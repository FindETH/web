module.exports = {
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    "react-hot-loader/babel",
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining"
  ],
  "env": {
    "production": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "modules": false,
            "targets": {
              "chrome": "78",
              "firefox": "70"
            }
          }
        ]
      ],
      "plugins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "corejs": 3,
            "version": "^7.7.6",
            "useESModules": true
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
