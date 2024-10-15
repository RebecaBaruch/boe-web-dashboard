export default (plop) => {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/pages/{{kebabCase name}}/view/{{kebabCase name}}.view.tsx',
        templateFile: 'page/templates/index.view.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/pages/{{kebabCase name}}/index.tsx',
        templateFile: 'page/templates/index.page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../tests/units/src/pages/{{kebabCase name}}/index.view.unit.spec.tsx',
        templateFile: 'page/templates/index.view.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../tests/units/src/pages/{{kebabCase name}}/controller/{{kebabCase name}}.controller.unit.spec.tsx',
        templateFile: 'controller/templates/index.controller.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/pages/{{kebabCase name}}/controller/{{kebabCase name}}.controller.tsx',
        templateFile: 'controller/templates/index.controller.tsx.hbs',
      },
    ],
  });
};
