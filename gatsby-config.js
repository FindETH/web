const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  configDir: 'gatsby',
  babel: false,
  tsNode: true
});
