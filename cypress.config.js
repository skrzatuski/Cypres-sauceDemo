const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,

  env: {
    productionUrl: "www.google.pl",
    devUrl: "www.saucedemo.com",
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
