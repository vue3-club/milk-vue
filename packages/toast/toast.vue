<template>
  <transition name="vm-toast-fade">
    <div class="vm-toast-wrapper" v-show="visible">
      <div :class="['vm-toast', `vm-toast--${toastType}`, `vm-toast--${position}`]">
        <!-- text only -->
        <div v-if="toastType === 'text'">{{ message }}</div>
        <div v-if="toastType === 'html'" v-html="message"/>

        <!-- with icon -->
        <template v-if="toastType === 'default'">
          <v-icon :type="type" :name="type" :color="iconColor" size="lg" />
          <div v-if="message" class="vm-toast__text">{{ message }}</div>
        </template>
      </div>
      <div :class="['vm-toast__overlay', { 'vm-toast__overlay--mask': mask }]" v-if="forbidClick || mask"/>
    </div>
  </transition>
</template>

<script>
  import Icon from '../icon';

  const TOAST_TYPES = ['text', 'html', 'loading', 'success', 'fail'];
  const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading'];
  export default {
    name: 'VToast',
    components: {
      [Icon.name]: Icon
    },
    props: {
      type: {
        type: String,
        default: 'text',
        validator: value => TOAST_TYPES.indexOf(value) > -1
      },
      message: {
        type: String,
        default: ''
      },
      forbidClick: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'middle'
      },
      mask: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible: false
      };
    },
    computed: {
      // 展示类型
      toastType() {
        return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
      },
      // iconColor
      iconColor() {
        switch (this.type) {
          case 'success':
            return '#6abf47';
          case 'fail':
            return '#f4333c';
          default :
            return '#fff';
        }
      }
    }
  };
</script>
