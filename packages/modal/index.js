import Vue from 'vue';
import VModal from './modal';

let instance;

const defaultOptions = {
  type: 'basic',
  value: true,
  duration: 3000,
  mask: true,
  title: '',
  message: '',
  promptRender: null,
  btns: null,
  forbidClick: true,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  },
  clear: () => {
    instance.value = false;
  }
};

const createInstance = () => {
  const ModalConstructor = Vue.extend(VModal);
  instance = new ModalConstructor({
    el: document.createElement('div')
  });

  instance.$on('input', value => {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

const Modal = options => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      createInstance();
    }
    Object.assign(instance, { resolve, reject }, ...defaultOptions, ...options);
  });
};

const createModal = function(options) {
  return Modal({
    ...options
  });
};

Modal.confirm = options => createModal({
  ...options,
  type: 'confirm'
});

export default Modal;
export {
  VModal
};
