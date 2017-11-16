var Components = require('./get-components')();
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../../packages/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'./{{package}}\';';
var ISNTALL_COMPONENT_TEMPLATE = '  {{name}}';
var MAIN_TEMPLATE = `{{include}}
import '../style/index.less'

const version = '{{version}}';
const components = [
{{components}}
];

const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
{{list}}
};
export default {
  install,
  version
};
`;

delete Components.font;

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

Components.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if ([
      // directives
      'Lazyload',
      'Waterfall',

      // services
      'Dialog',
      'Toast',
      'ImagePreview'
    ].indexOf(componentName) === -1) {
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  list: listTemplate.join(',\n'),
  components: installTemplate.join(',\n') || ' ',
  version: process.env.VERSION || require('../../package.json').version
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:' + OUTPUT_PATH);

