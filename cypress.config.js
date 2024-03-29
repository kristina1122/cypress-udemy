const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uee3kc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: 'cypress/integration/*/*.js',
    specPattern: 'cypress/e2e/**/*.js', //to run tests for network requests
    excludeSpecPattern: "cypress/e2e/examples/*.js", //использутся чтобы не отображать папку при запуске сайпресс
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videoCompression: 51,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    }
  },
});
