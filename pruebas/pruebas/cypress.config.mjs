import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import preprocessor from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild.js';
import AllureWriter from '@shelex/cypress-allure-plugin/writer.js';
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill';


const setupNodeEvents = async function (on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [
        createEsbuildPlugin.default(config),
        NodeModulesPolyfills.default(),
      ],
    })
  );
  AllureWriter(on, config);
 // MochaReport(on, config);
  return config;
};
export default defineConfig({
  
  e2e: {
    experimentalSessionAndOrigin:true,
    specPattern: '**/*.{feature,features}',
    setupNodeEvents,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 12000,
    execTimeout: 100000,
    taskTimeout: 90000,
    retries: 0,
  
  },
});
