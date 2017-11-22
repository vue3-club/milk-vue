import Button from './button';
import Col from './col';
import Icon from './icon';
import Input from './input';
import Row from './row';
import Toast from './toast';
import '../style/index.less'

const version = '0.10.0';
const components = [
  Button,
  Col,
  Icon,
  Input,
  Row
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
  Col,
  Icon,
  Input,
  Row,
  Toast
};
export default {
  install,
  version
};
