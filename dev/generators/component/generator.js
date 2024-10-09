export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: 'component/templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/styles.module.css',
        templateFile: 'component/templates/styles.module.css.hbs',
      },
    ],
  });
};
