const { typescript } = require('projen');
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-test-project',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */

  jestOptions: {
    testTypes: {
      unit: '**/**.unit.test.(ts|js)',
      component: '**/**.component.test.(ts|js)',
      integration: '**/**.integration.test.(ts|js)',
    },
  },
});
project.synth();