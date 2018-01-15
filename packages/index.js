import Button from './button';
import Checkbox from './checkbox';
import Col from './col';
import Drawer from './drawer';
import Icon from './icon';
import Input from './input';
import List from './list';
import ListItem from './listItem';
import Menu from './menu';
import Navbar from './navbar';
import Popover from './popover';
import Radio from './radio';
import Row from './row';
import Switch from './switch';
import Tabs from './tabs';
import TabPane from './tabPane';
import Textarea from './textarea';
import Toast from './toast';
import '../style/index.less';

const version = '0.9.3';
const components = [
  Button,
  Checkbox,
  Col,
  Drawer,
  Icon,
  Input,
  List,
  ListItem,
  Menu,
  Navbar,
  Popover,
  Radio,
  Row,
  Switch,
  Tabs,
  TabPane,
  Textarea
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
  Checkbox,
  Col,
  Drawer,
  Icon,
  Input,
  List,
  ListItem,
  Menu,
  Navbar,
  Popover,
  Radio,
  Row,
  Switch,
  Tabs,
  Textarea,
  Toast
};
export default {
  install,
  version
};
