const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config); 
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://form.jotform.com',
  },
});
