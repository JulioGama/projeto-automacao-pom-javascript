const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://phptravels.net/",
    specPattern: "**/*.feature",
    viewportWidth: 1920,   // Largura da tela em pixels (Ex: Full HD)
    viewportHeight: 1080,  // Altura da tela em pixels (Ex: Full HD)
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
