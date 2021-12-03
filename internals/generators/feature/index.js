/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a feature component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Login',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/features/{{properCase name}}/index.js',
        templateFile: './feature/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../app/features/{{properCase name}}/{{ dashCase name }}.styles.js',
        templateFile: './feature/styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../app/features/{{properCase name}}/{{ dashCase name }}.actions.js',
        templateFile: './feature/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../app/features/{{properCase name}}/{{ dashCase name }}.reducers.js',
        templateFile: './feature/reducers.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../app/features/{{properCase name}}/{{ dashCase name }}.types.js',
        templateFile: './feature/types.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/features/',
    });

    return actions;
  },
};
