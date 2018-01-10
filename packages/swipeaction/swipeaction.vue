<template>
  <swipeout
    :prefixCls="prefixCls"
    :left="left"
    :right="right"
    :autoClose="autoClose"
    :onOpen="onOpen"
    :onClose="onClose"
  >
    <slot></slot>
  </swipeout>
</template>


<script>
import Swipeout from 'v-swipeout';

export default {
  name: 'VSwipeAction',
  props: {
    left: Array,
    right: Array,
    autoClose: {
      type: Boolean,
      default: false
    },
    onOpen: Function,
    onClose: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'vm-swipeout'
    }
  },
  components: {
    Swipeout
  }
}
</script>
