import Button from './button';
import Input from './input';

const version = '0.10.0';
const components = [
  Button,
  Input
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
  Button,
  Input
};
export default {
  install,
  version
};
