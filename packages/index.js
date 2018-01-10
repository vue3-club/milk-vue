import Button from './button';
import Checkbox from './checkbox';
import Col from './col';
import Drawer from './drawer';
import Icon from './icon';
import ImagePicker from './imagePicker';
import Input from './input';
import List from './list';
import ListItem from './listItem';
import Menu from './menu';
import Modal from './modal';
import Navbar from './navbar';
import Pagination from './pagination';
import Popover from './popover';
import Progress from './progress';
import Radio from './radio';
import Row from './row';
import Stepper from './stepper';
import Swipeaction from './swipeaction';
import Switch from './switch';
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
  ImagePicker,
  Input,
  List,
  ListItem,
  Menu,
  Modal,
  Navbar,
  Pagination,
  Popover,
  Progress,
  Radio,
  Row,
  Stepper,
  Swipeaction,
  Switch,
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
  ImagePicker,
  Input,
  List,
  ListItem,
  Menu,
  Modal,
  Navbar,
  Pagination,
  Popover,
  Progress,
  Radio,
  Row,
  Stepper,
  Swipeaction,
  Switch,
  Textarea,
  Toast
};
export default {
  install,
  version
};
